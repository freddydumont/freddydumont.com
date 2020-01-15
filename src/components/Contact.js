/** @jsx jsx **/
import { jsx } from 'theme-ui';
import Section from './Section';
import {
  Button,
  Label,
  Flex,
  Box,
  Input,
  Textarea,
} from '@theme-ui/components';

const Contact = () => (
  <Section htmlId="contact" withContainer>
    <Section.Title>Contact</Section.Title>
    <Section.Body>Use the form below to send me an email.</Section.Body>
    <form
      sx={{ width: 'full' }}
      data-netlify="true"
      method="post"
      name="contact"
    >
      <Input type="hidden" name="form-name" value="contact" />
      <Flex variant="flex_form_element">
        <Box
          variant="form_box"
          mb={[12, 12, 0]}
          sx={{
            width: ['full', 'full', '1/2'],
          }}
        >
          <Label htmlFor="first-name">First Name*</Label>
          <Input type="text" name="first-name" id="first-name" required />
        </Box>
        <Box
          variant="form_box"
          sx={{
            width: ['full', 'full', '1/2'],
          }}
        >
          <Label htmlFor="last-name">Last Name</Label>
          <Input type="text" name="last-name" id="last-name" />
        </Box>
      </Flex>
      <Flex variant="flex_form_element">
        <Box variant="form_box">
          <Label htmlFor="email">Email address*</Label>
          <Input type="email" name="email" id="email" required />
        </Box>
      </Flex>
      <Flex variant="flex_form_element">
        <Box variant="form_box">
          <Label htmlFor="message">Message*</Label>
          <Textarea rows="8" name="message" id="message" required />
        </Box>
      </Flex>
      <Flex
        variant="flex_form_element"
        sx={{
          justifyContent: 'flex-end',
        }}
      >
        <Box
          variant="form_box"
          sx={{
            maxWidth: ['initial', 'initial', 'xs'],
          }}
        >
          <Button
            variant="gray"
            data-testid="button"
            type="submit"
            sx={{
              ':hover': {
                boxShadow: '2xl',
              },
            }}
          >
            Send
          </Button>
        </Box>
      </Flex>
    </form>
  </Section>
);

export default Contact;
