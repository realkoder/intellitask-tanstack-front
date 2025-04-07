import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import ImageUploader from '../../ui/image-uploader';

type OrgInfoProps = {
  name: string;
  setName: (name: string) => void;
  description: string;
  setDescription: (description: string) => void;
};

const OrgInfo = ({name, setName, description, setDescription} : OrgInfoProps) => {

  return (
    <Card className="w-full max-w-lg">
        <CardHeader className="space-y-1 text-center">
          <CardTitle className="text-2xl font-bold">Create your organization</CardTitle>
          <CardDescription>Set up a teamspace for your team to collaborate</CardDescription>
        </CardHeader>

          <CardContent className="space-y-4">
            <h4 className='text-center'>Organization Logo</h4>
          <ImageUploader onImageUpload={() => {}} aspectRatio="circle" width={100} height={100} />
            <div className="space-y-2">
              <Label htmlFor="org-name">Organization Name</Label>
              <Input
                id="org-name"
                placeholder="Acme Inc."
                value={name}
                maxLength={50}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="org-description">Description (optional)</Label>
              <Textarea
                id="org-description"
                placeholder="What does your organization do?"
                value={description}
                maxLength={1000}
                onChange={(e) => setDescription(e.target.value)}
                rows={3}
              />
            </div>
          </CardContent>
      </Card>
  );
}

export default OrgInfo;
