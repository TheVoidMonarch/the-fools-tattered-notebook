import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { toast } from "sonner";

interface CreatePostProps {
  onPostCreate: (post: {
    title: string;
    content: string;
    category: string;
    tags: string[];
    date: string;
  }) => void;
}

const CreatePost: React.FC<CreatePostProps> = ({ onPostCreate }) => {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');
  const [tags, setTags] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!title || !content || !category) {
      toast.error('Please fill in all required fields');
      return;
    }

    onPostCreate({
      title,
      content,
      category,
      tags: tags.split(',').map(tag => tag.trim()).filter(Boolean),
      date: new Date().toISOString(),
    });

    setTitle('');
    setContent('');
    setCategory('');
    setTags('');
    setOpen(false);
    toast.success('Post created successfully!');
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-arcane hover:bg-arcane/90 text-parchment">
          <Plus className="h-4 w-4 mr-2" />
          Create Post
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-parchment">
        <DialogHeader>
          <DialogTitle className="text-ink">Create New Post</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title" className="text-ink">Title</Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="bg-parchment-light border-ink/20"
              placeholder="Enter post title"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="category" className="text-ink">Category</Label>
            <Input
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="bg-parchment-light border-ink/20"
              placeholder="Enter category"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="content" className="text-ink">Content</Label>
            <Textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="bg-parchment-light border-ink/20 min-h-[200px]"
              placeholder="Write your post content here..."
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="tags" className="text-ink">Tags (comma-separated)</Label>
            <Input
              id="tags"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              className="bg-parchment-light border-ink/20"
              placeholder="e.g., security, hacking, tools"
            />
          </div>
          <Button type="submit" className="w-full bg-arcane hover:bg-arcane/90 text-parchment">
            Create Post
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CreatePost; 