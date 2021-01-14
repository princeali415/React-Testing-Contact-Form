import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ContactForm from './ContactForm';
import userEvent from '@testing-library/user-event';

describe('ContactForm Functionality test', () => {
    beforeAll(() => {
        render(<ContactForm />)
    })

    test('contact form render', async () => {

        // Act:

        // 1. Get our firstName, lastName, email, and message input feilds.
        const firstNameInput = screen.getByPlaceholderText(/edd/i)
        const lastNameInput = screen.getByPlaceholderText(/burke/i)
        const emailInput = screen.getByPlaceholderText(/bluebill1049@hotmail.com/i)
        const messageInput = screen.getByPlaceholderText(/Type message here.../i)

        // 2. Type the values into out input feilds
        userEvent.type(firstNameInput, 'Hussain');
        userEvent.type(lastNameInput, 'Ali');
        userEvent.type(emailInput, 'ali415.code@gmail.com');
        userEvent.type(messageInput, 'this is here for us to chekc if the message feild is working correctly');

        // 3. Push the submit button
        const button = screen.getByRole('button');
        userEvent.click(button);

        // Assert:
        
        // New array of contact info is on the screen containing above inputs
        const newContact = await screen.findByText(/Hussain/i);
        expect(newContact).toBeInTheDocument();
    })
})