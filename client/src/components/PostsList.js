/* eslint-disable */

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Post from './Post';
import { fetchPosts } from '../redux/actions/post';
import Loader from './Loader';
import { useColorModeValue, Button, Box, Wrap, Flex, Link, Stack } from '@chakra-ui/react';

const PostsList = () => {
  const listPost = useSelector(state => state.posts);
  const { posts, loading, error } = listPost;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Flex
      bg={useColorModeValue('#F9FAFB', 'gray.600')}
      px={5}
      py={30}
      w="full"
      align="center"
      justify="center"
      minH="100vh"
    >
      <Wrap spacing="30px" justify="center">
        {loading ? (
          <Loader />
        ) : posts?.length > 0 ? (
          posts?.map(post => (
            <Box
              mx="auto"
              rounded="lg"
              shadow="md"
              bg={('white', 'gray.800')}
              maxW="md"
              key={post?._id}
              boxShadow="dark-lg"
            >
              <Post post={post} />
            </Box>
          ))
        ) : (
          <Stack direction={'column'} spacing={3} align={'center'} alignSelf={'center'} position={'relative'}>
            <h2>The Blog is still empty!</h2>
            <br/>
            <h3>Click in the above "New Post" button and start making magic</h3>
          </Stack>
        )}
      </Wrap>
    </Flex>
  );
};

export default PostsList;
