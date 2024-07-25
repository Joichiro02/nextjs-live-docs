'use client';

import React from 'react';
import Header from './Header';
import { Editor } from './editor/Editor';
import { ClientSideSuspense, RoomProvider } from '@liveblocks/react/suspense';

import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs';
import Loader from './Loader';

export default function CollaborativeRoom() {
  return (
    <RoomProvider id='my-room'>
      <ClientSideSuspense fallback={<Loader/>}>
        <div className='collaborative-room'>
          <Header>
            <div className='flex w-fit items-center justify-center gap-2'>
              <p className='document-title'>Share</p>
            </div>
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </Header>
          <Editor />
        </div>
      </ClientSideSuspense>
    </RoomProvider>
  )
}
