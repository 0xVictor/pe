import React, { useState } from 'react';
import { Grid, Card, Text, Input, Button } from "@nextui-org/react";
import { Mail } from './Icon/Mail';
import { signIn } from 'next-auth/react';
// import { Container } from './styles';



const Verify: React.FC = () => {
  const [email, setEmail] = useState('');

  const signInWithEmail = async (email) => {
    let toastId;
    try {
      // toastId = toast.loading('Loading...');
      // setDisabled(true);
      // Perform sign in
      const { error } = await signIn('email', {
        redirect: false,
        callbackUrl: window.location.href,
        email,
      });
      // Something went wrong
      if (error) {
        throw new Error(error);
      }

    } catch (err) {
      // toast.error('Unable to sign in', { id: toastId });
      console.log('Unable to sign in', err)
    } finally {
      // setDisabled(false);
    }
  };

  const onEmailChange = (value: string) => {
    setEmail(value)
  }

  return (
    <Grid.Container alignContent='center' justify='center' >
      <Card css={{ mw: "400px", padding: '$2' }} >
        <Card.Header>
          <Text id="modal-title" size={18}>
            Welcome to {' '}
            <Text b size={18}>
              PersoAI
            </Text>
          </Text>
        </Card.Header>
        <Card.Body css={{ gap: '12' }}>


          <Text b>Confirm your email</Text>
          <Text > We emailed a magic link to you.</Text>

          <Text> Check your inbox and click the link in the email to login or sign
            up.</Text>


        </Card.Body>

        <Card.Footer>
          <Button onPress={() => signInWithEmail(email)} auto>
            Sign in
          </Button>
        </Card.Footer>
      </Card>
    </Grid.Container>
  )


}

export default Verify;