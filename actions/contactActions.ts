"use server";

import dbConnect from "@/lib/dbConnect";
import ContactModel, { IContact, IContactClient } from '../models/Contact';
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/options";

type ContactFormFields = {
  name: string;
  email: string;
  subject: string;
  message: string;
};


export async function saveContact(contact: ContactFormFields): Promise<IContactClient> {
  await dbConnect();
  const session = await getServerSession(authOptions);
  console.log(session);

  const userId = session?.user?.id;
  if (!userId) {
    throw new Error("User is not authorized");
  }

  const createdContact = await ContactModel.create(
    {
      userId,
      name: contact.name,
      email: contact.email,
      subject: contact.subject,
      message: contact.message
    }
  )

  return {
    _id: createdContact._id.toString(),
    userId: createdContact.userId.toString(),
    name: createdContact.name,
    email: createdContact.email,
    subject: createdContact.subject,
    message: createdContact.message,
    createdAt: createdContact.createdAt.toISOString(),
  };
}

export async function getAllContacts(): Promise<IContactClient[]> {
  await dbConnect();
  const contacts = await ContactModel.find().lean() ;
  return contacts.map((contact) => ({
    _id: (contact._id as any).toString(),
    userId: contact.userId.toString(),
    name: contact.name,
    email: contact.email,
    subject: contact.subject,
    message: contact.message,
    createdAt: contact.createdAt.toString(),
  }));
}

export async function deleteContact(contactId: string) {
  await dbConnect();

  const deleteContact = await ContactModel.findByIdAndDelete(
    contactId,
  ).lean() as unknown as IContact;
}

