import type React from "react"

import { useState, useRef, type ChangeEvent } from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Upload, X } from "lucide-react"

interface ImageUploaderProps {
  onImageUpload: (file: File) => void
  defaultImage?: string
  className?: string
  maxSizeMB?: number
  aspectRatio?: "square" | "circle"
  width?: number
  height?: number
}

export default function ImageUploader({
  onImageUpload,
  defaultImage,
  className,
  maxSizeMB = 5,
  aspectRatio = "square",
  width = 200,
  height = 200,
}: ImageUploaderProps) {
  const [dragActive, setDragActive] = useState(false)
  const [imagePreview, setImagePreview] = useState<string | null>(defaultImage || null)
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const inputRef = useRef<HTMLInputElement>(null)

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()

    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }

  const validateFile = (file: File): boolean => {
    // Check file size
    if (file.size > maxSizeMB * 1024 * 1024) {
      setError(`File size exceeds ${maxSizeMB}MB limit`)
      return false
    }

    // Check file type
    if (!file.type.startsWith("image/")) {
      setError("Only image files are allowed")
      return false
    }

    setError(null)
    return true
  }

  const processFile = (file: File) => {
    if (!validateFile(file)) return

    setIsLoading(true)

    // Create preview
    const reader = new FileReader()
    reader.onload = (e) => {
      setImagePreview(e.target?.result as string)
      setIsLoading(false)
    }
    reader.readAsDataURL(file)

    // Pass file to parent component
    onImageUpload(file)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      processFile(e.dataTransfer.files[0])
    }
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()

    if (e.target.files && e.target.files[0]) {
      processFile(e.target.files[0])
    }
  }

  const handleClick = () => {
    inputRef.current?.click()
  }

  const removeImage = () => {
    setImagePreview(null)
    if (inputRef.current) inputRef.current.value = ""
  }

  return (
    <div className={cn("flex flex-col items-center", className)}>
      <div
        className={cn(
          "relative flex flex-col items-center justify-center border-2 border-dashed border-gray-300 bg-gray-50 transition-all hover:cursor-pointer",
          dragActive ? "border-primary bg-primary/5" : "hover:bg-gray-100",
          aspectRatio === "circle" ? "rounded-full" : "rounded-lg",
          "overflow-hidden",
        )}
        style={{ width: `${width}px`, height: `${height}px` }}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
        onClick={handleClick}
      >
        {isLoading ? (
          <div className="absolute inset-0 flex items-center justify-center bg-background/80">
            <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
          </div>
        ) : imagePreview ? (
          <>
            <img
              src={imagePreview || "/placeholder.svg"}
              alt="Uploaded image preview"
              style={{ width: `${width}px`, height: `${height}px` }}
              className="object-cover"
            />
            <Button
              variant="destructive"
              size="icon"
              className="absolute right-2 top-2 h-6 w-6 rounded-full"
              onClick={(e) => {
                e.stopPropagation()
                removeImage()
              }}
            >
              <X className="h-4 w-4" />
              <span className="sr-only">Remove image</span>
            </Button>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center p-4 text-center">
            <Upload className="mb-2 h-8 w-8 text-gray-400" />

          </div>
        )}
        <input ref={inputRef} type="file" accept="image/*" onChange={handleChange} className="hidden" />
      </div>

      {error && <p className="mt-2 text-sm text-destructive">{error}</p>}
      <p className="mb-1 mt-2 text-sm font-normal">Drag & drop an image here or click to browse</p>
      <p className="mt-1 text-xs text-muted-foreground">Supported formats: JPG, PNG, GIF, WebP (max {maxSizeMB}MB)</p>
    </div>
  )
}

