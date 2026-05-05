import { addPost, getPosts } from "@/database/postdb";
import {FloppyDisk} from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  FieldGroup,
  Fieldset,
  Form,
  Input,
  Label,
  TextArea,
  TextField,
} from "@heroui/react";
import { revalidatePath } from "next/cache";

const ServerActionPage = () => {
    const posts = getPosts()

    const handlePostAction = async (formData) =>{
        'use server'
       const title = formData.get('title')
       const des = formData.get('des')
       addPost({title, description: des})
       revalidatePath('/server-action')
    }
    return (
        <div>
            <Form action={handlePostAction} className="w-full max-w-96 mx-auto mt-20 border rounded-lg p-5 shadow-lg">
                <Fieldset>
                    <Fieldset.Legend>Add Post</Fieldset.Legend>
                    <Description>Update your profile information.</Description>
                    <FieldGroup>
                        <TextField
                            isRequired
                            name="title"
                        >
                            <Label>Title</Label>
                            <Input placeholder="title" />
                            <FieldError />
                        </TextField>
                        <TextField isRequired name="des" type="text">
                            <Label>Description</Label>
                            <Input placeholder="description" />
                            <FieldError />
                        </TextField>
                    </FieldGroup>
                    <Fieldset.Actions>
                        <Button type="submit">
                            <FloppyDisk />
                            Save changes
                        </Button>
                        <Button type="reset" variant="secondary">
                            Cancel
                        </Button>
                    </Fieldset.Actions>
                </Fieldset>
            </Form>
            <div className="grid grid-cols-3 p-10 gap-3">
                {
                    posts.map(post => <div key={post.id} className="border-2 border-purple-600 p-4 shadow-lg bg-purple-200 text-purple-600">
                        <h1 className="font-bold text-2xl">{post.title}</h1>
                        <p>{post.description}</p>
                    </div>)
                }
            </div>
        </div>
    );
};

export default ServerActionPage;