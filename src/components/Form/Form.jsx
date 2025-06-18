// Form.js
import {
  Box,
  Button,
  Form,
  FormField,
  Header,
  Heading,
  TextInput,
} from 'grommet';

export const RegisterForm = ({FormValues, handleChange, handleDelete, onSubmit, size, type}) => {
  return (
    <div>
      <Header
        direction="column"
        align="start"
        gap="xxsmall"
        pad={{ horizontal: 'xxsmall' }}
      >
        <Heading level={2} margin="none">
          {type}
        </Heading>
      </Header>
      <Box
        pad={{ horizontal: 'xxsmall' }}
      >
        <Form
          validate="blur"
          value={FormValues}
          messages={{
            required: 'This is a required field.',
          }}
          onChange={nextValue => handleChange(nextValue)}
          onSubmit={({ value, touched }) => onSubmit({ value, touched })}
          method="post"
        >



          <FormField
            label="name"
            name="name"
          >
            <TextInput
              name="name"
            />
          </FormField>

          <FormField
            label="size"
            name="size"
          >
            <TextInput
              name="size"
            />
          </FormField>

          <FormField
            label="weight"
            name="weight"
          >
            <TextInput
              name="weight"
            />
          </FormField>

          <FormField
            label="lifespan"
            name="lifespan"
          >
            <TextInput
              name="lifespan"
            />
          </FormField>

          <FormField
            label="habitat"
            name="habitat"
          >
            <TextInput
              name="habitat"
            />
          </FormField>

          <FormField
            label="diet"
            name="diet"
          >
            <TextInput
              name="diet"
            />
          </FormField>

          <Box
            direction="row"
            align={!['xsmall', 'small'].includes(size) ? 'start' : undefined}
            margin={{ top: 'medium', bottom: 'small' }}
          >
            <Button label={type} primary type="submit" />
            {type === "Update Bird" ? (
              <Button label={"Delete Bird"} secondary onClick={handleDelete}/>
            ) : null}
          </Box>
        </Form>
      </Box>
    </div>
  );
};
