import { render, screen } from '@testing-library/react';
import { mocked } from 'ts-jest/utils'
import { useSession } from 'next-auth/client';
import { SignInButton } from '.';

jest.mock('next-auth/client')

describe('SignInButton component', () => {

  it('renders correctly when user is not authenticated', () => {
    const useSessionMocked = mocked(useSession)

    useSessionMocked.mockReturnValue([null, false]);
     render (
      <SignInButton />
    )

    expect(screen.getByText('Sign in with Guthub')).toBeInTheDocument() 
  })

  it('renders correctly when user is not authenticated', () => {
    const useSessionMocked = mocked(useSession)

    useSessionMocked.mockReturnValue([
      {user: {name: 'Jhon Doe', email: 'jhondoe@gmail.com'}, expires: 'fake-expires'}, false]);
    render (
     <SignInButton />
   )

   expect(screen.getByText('Jhon Doe')).toBeInTheDocument() 
 })
  
})
