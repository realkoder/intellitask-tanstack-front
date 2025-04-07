import { useState } from 'react';
import { FileUpload, useFileUpload } from '@ark-ui/react';
import getRequestClient from '../../lib/getRequestClient';
import { Upload, FileIcon, X, CheckCircle } from 'lucide-react';

interface FileUploaderProps {
  teamspaceId?: string;
  projectId?: string;
  chatroomId?: string;
  organizationId?: string;
  uploadType?: string;
  receiverIds?: string[];
  onUploadComplete?: (results: any[]) => void;
  compact?: boolean;
  files?: any[];
  className?: string;
}

export const FileUploader: React.FC<FileUploaderProps> = ({
  teamspaceId = null,
  projectId = null,
  chatroomId = null,
  organizationId,
  uploadType = 'DOCUMENT',
  receiverIds = [],
  onUploadComplete,
  compact = false,
  files = [],
  className = ''
}) => {
  const fileUpload = useFileUpload({ maxFiles: 10, maxFileSize: 50 * 1024 * 1024 }); // 50MB limit
  const [isUploading, setIsUploading] = useState(false);
  const [showDropzone, setShowDropzone] = useState(false);

  const handleUpload = async (files: File[]): Promise<void> => {
    if (!files.length) return;

    setIsUploading(true);

    try {
      const formData = new FormData();

      // Add metadata as a JSON string
      const metadata = {
        teamspaceId: teamspaceId || null,
        projectId: projectId || null,
        chatroomId: chatroomId || null,
        organizationId,
        uploadType,
      };

      formData.append('metadata', JSON.stringify(metadata));

      // Add receiver IDs
      if (receiverIds.length > 0) {
        formData.append('receiverIds', JSON.stringify(receiverIds));
      }

      // Append each file to the form data
      files.forEach(file => {
        formData.append('file', file);
      });

      // Make the API call to your Encore endpoint
      const response = await getRequestClient().file_management.uploadFilesWithMetadata('POST', formData);

      if (!response.ok) {
        throw new Error(`Upload failed: ${response.statusText}`);
      }

      const results = await response.json();
      console.log('Upload successful:', results);

      // Call the callback with results if provided
      if (onUploadComplete) {
        onUploadComplete(results);
      }

      // Hide the dropzone after successful upload if in compact mode
      if (compact) {
        setShowDropzone(false);
      }

    } catch (error) {
      console.error('Error uploading files:', error instanceof Error ? error.message : String(error));
    } finally {
      setIsUploading(false);
    }
  };

  // Function to format file size
  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
  };

  if (compact && !showDropzone) {
    return (
      <div className={`flex items-center gap-2 ${className}`}>
        <button
          onClick={() => setShowDropzone(true)}
          className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded-md bg-emerald-50 text-emerald-700 hover:bg-emerald-100 transition-colors"
        >
          <Upload size={12} />
          <span>Upload</span>
        </button>

        {files && files.length > 0 && (
          <div className="text-xs text-muted-foreground">
            {files.length} file{files.length !== 1 ? 's' : ''}
          </div>
        )}
      </div>
    );
  }

  return (
    <FileUpload.RootProvider value={fileUpload}>
      <div className={`relative ${className}`}>
        {compact && (
          <button
            onClick={() => setShowDropzone(false)}
            className="absolute right-0 top-0 p-1 text-gray-400 hover:text-gray-600 z-10"
          >
            <X size={16} />
          </button>
        )}

        <div className="space-y-2">
          {!compact && (
            <FileUpload.Label className="block text-sm font-medium text-gray-700">
              Upload Files
            </FileUpload.Label>
          )}

          <FileUpload.Dropzone className={`border-2 border-dashed border-gray-300 rounded-lg text-center
            ${compact ? 'p-3' : 'p-6'} bg-gray-50 hover:bg-gray-100 transition-colors`}>
            {compact ? (
              <div className="flex flex-col items-center">
                <Upload className="h-5 w-5 text-gray-500 mb-1" />
                <FileUpload.Trigger className="text-xs text-emerald-600 font-medium hover:underline">
                  Choose Files
                </FileUpload.Trigger>
              </div>
            ) : (
              <>
                <p className="text-gray-600 mb-2">Drag your files here</p>
                <FileUpload.Trigger className="py-2 px-4 bg-emerald-600 text-white rounded hover:bg-emerald-700 transition-colors">
                  Choose Files
                </FileUpload.Trigger>
              </>
            )}
          </FileUpload.Dropzone>

          <FileUpload.ItemGroup>
            <FileUpload.Context>
              {(context) => (
                <>
                  {context.acceptedFiles.length > 0 && (
                    <div className={`space-y-2 mt-2 ${compact ? 'max-h-32 overflow-y-auto' : ''}`}>
                      {context.acceptedFiles.map((file) => (
                        <FileUpload.Item
                          key={file.name}
                          file={file}
                          className="flex items-center p-2 border rounded bg-white"
                        >
                          <FileUpload.ItemPreview type="image/*" className="w-8 h-8 mr-2 bg-gray-100 flex items-center justify-center rounded overflow-hidden">
                            <FileUpload.ItemPreviewImage className="max-w-full max-h-full object-cover" />
                          </FileUpload.ItemPreview>

                          <FileUpload.ItemPreview type=".*" className="w-8 h-8 mr-2 bg-gray-100 flex items-center justify-center rounded">
                            <FileIcon className="h-4 w-4 text-gray-500" />
                          </FileUpload.ItemPreview>

                          <div className="flex-1 truncate">
                            <FileUpload.ItemName className="font-medium text-sm truncate" />
                            <FileUpload.ItemSizeText className="text-xs text-gray-500" />
                          </div>

                          {isUploading ? (
                            <div className="animate-pulse text-emerald-500">
                              <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                              </svg>
                            </div>
                          ) : (
                            <FileUpload.ItemDeleteTrigger className="text-red-500 hover:text-red-700 p-1">
                              <X className="h-4 w-4" />
                            </FileUpload.ItemDeleteTrigger>
                          )}
                        </FileUpload.Item>
                      ))}
                    </div>
                  )}

                  {context.acceptedFiles.length > 0 && !isUploading && (
                    <button
                      onClick={() => handleUpload(context.acceptedFiles)}
                      className={`mt-2 py-1.5 px-3 bg-emerald-600 text-white rounded hover:bg-emerald-700 transition-colors
                        flex items-center justify-center gap-1.5 ${compact ? 'text-xs w-full' : 'w-full'}`}
                    >
                      <Upload className={`${compact ? 'h-3 w-3' : 'h-4 w-4'}`} />
                      <span>Upload {context.acceptedFiles.length} File{context.acceptedFiles.length !== 1 ? 's' : ''}</span>
                    </button>
                  )}
                </>
              )}
            </FileUpload.Context>
          </FileUpload.ItemGroup>
        </div>

        {/* Display existing files if provided */}
        {files && files.length > 0 && !compact && (
          <div className="mt-4">
            <h4 className="text-sm font-medium mb-2 text-gray-700">Uploaded Files</h4>
            <div className="space-y-2 max-h-40 overflow-y-auto pr-1">
              {files.map((file, idx) => (
                <div key={idx} className="flex items-center p-2 border rounded bg-white">
                  <div className="w-8 h-8 mr-2 bg-gray-100 flex items-center justify-center rounded">
                    <FileIcon className="h-4 w-4 text-gray-500" />
                  </div>
                  <div className="flex-1 truncate">
                    <p className="font-medium text-sm truncate">{file.name || `File ${idx + 1}`}</p>
                    <p className="text-xs text-gray-500">
                      {file.size ? formatFileSize(file.size) : 'Unknown size'}
                    </p>
                  </div>
                  <CheckCircle className="h-4 w-4 text-emerald-500" />
                </div>
              ))}
            </div>
          </div>
        )}

        <FileUpload.HiddenInput />
      </div>
    </FileUpload.RootProvider>
  );
};
