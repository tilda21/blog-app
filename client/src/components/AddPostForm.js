import React, { useState } from 'react';
import FileBase64 from 'react-file-base64';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { useForm, Controller } from 'react-hook-form';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Textarea,
  Select,
} from '@chakra-ui/react';
import { Button } from '@chakra-ui/button';
import { Input } from '@chakra-ui/input';
import { FormControl, FormLabel } from '@chakra-ui/form-control';

import { createPost } from '../redux/actions/post';

const categories = ['Travel', 'Friends', 'Nature', 'Sports', 'Food', 'Fun', 'Happy', 'Sad'];

const AddPostForm = ({ isOpen, onClose }) => {
  const [file, setFile] = useState(null);

  const { errors, control, handleSubmit } = useForm();

  const dispatch = useDispatch();

  const onSubmit = data => {
    try {
      dispatch(createPost({ ...data, image: file }));
      toast.success('Blog successfully added!');
      clearForm();
    } catch (error) {
      toast.error(error);
    }
  };

  const clearForm = () => {
    onClose();
    setFile(null);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add New Post</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <form noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
            <FormControl isInvalid={Boolean(errors?.title)} minH={'100px'}>
              <FormLabel>Title</FormLabel>
              <Input id="title" label="Title" name="title" />
              {errors?.title && <p className="validation__error">{errors?.title.message}</p>}
            </FormControl>

            <FormControl isInvalid={Boolean(errors?.subtitle)} minH={'100px'}>
              <FormLabel>Subtitle</FormLabel>
              <Input id="subtitle" label="Subtitle" name="subtitle" />
              {errors?.subtitle && <p className="validation__error">{errors?.subtitle.message}</p>}
            </FormControl>

            <FormControl isInvalid={Boolean(errors?.author)} minH={'100px'}>
              <FormLabel>Author</FormLabel>
              <Input id="author" label="Author" name="author" />
              {errors?.author && <p className="validation__error">{errors?.author.message}</p>}
            </FormControl>

            <FormControl minH={'100px'}>
              <FormLabel>Category</FormLabel>
              <Controller
                as={
                  <Select placeholder="Choose Category">
                    {categories.map((category, i) => (
                      <option key={i} value={category}>
                        {category}
                      </option>
                    ))}
                  </Select>
                }
                name="tag"
                control={control}
                defaultValue={categories[0]}
              />
            </FormControl>
            <FormControl isInvalid={Boolean(errors?.content)} minH={'100px'}>
              <FormLabel>Content</FormLabel>
              <Textarea id="content" label="Content" name="content" />
              {errors?.content && <p className="validation__error">{errors?.content?.message}</p>}
            </FormControl>

            <FormControl mt={4}>
              <FileBase64 multiple={false} onDone={({ base64 }) => setFile(base64)} />
            </FormControl>

            <ModalFooter pr={0}>
              <Button colorScheme="blue" mr={3} onClick={() => handleSubmit(onSubmit)()}>
                Save
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default AddPostForm;
