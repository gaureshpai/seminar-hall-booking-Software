"use server";

import dbConnect from "@/lib/dbConnect";
import ContactModel, { IContact } from '../models/Contact';

export async function getAllContacts(): Promise<IContact[]> {
  await dbConnect();
  const contacts = await ContactModel.find().lean<IContact[]>();
  return contacts;
}

export async function deleteContact(contactId: string) {
  await dbConnect();

  const deleteContact = await ContactModel.findByIdAndDelete(
    contactId,
  ).lean() as unknown as IContact;

}

