'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Image from 'next/image';
import image from '@/public/images/bi--image.png';
import avatar2 from '@/public/images/avatar2.png';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { supabase } from '../../config';

const UploadForm: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const username = searchParams.get('username');

  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [name, setName] = useState<string>('');
  const [bio, setBio] = useState<string>('');
  const [socialLink, setSocialLink] = useState<string>('');
  const [profilePicture, setProfilePicture] = useState<File | null>(null);

  useEffect(() => {
    console.log('Username from URL:', username);
    if (!username) {
      router.push('/signup'); // Redirect to signup if username is not present
    }
  }, [username, router]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setProfilePicture(e.target.files[0]);
      setSelectedImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleSubmit = async () => {
    try {
      // Upload the profile picture to Supabase storage if provided
      let profilePictureUrl: string | null = null;
      if (profilePicture) {
        const uniqueFilename = `${username}-${Date.now()}-${profilePicture.name}`;
        const { data, error: uploadError } = await supabase.storage
          .from('profile-pictures')
          .upload(uniqueFilename, profilePicture, { upsert: true });

        if (uploadError) throw uploadError;
        profilePictureUrl = data?.path;
      }

      // Log each variable
      console.log('Username:', username);
      console.log('Name:', name);
      console.log('Bio:', bio);
      console.log('Social Link:', socialLink);
      console.log('Profile Picture URL:', profilePictureUrl);

      // Insert user data into Supabase
      const { data, error: insertError } = await supabase
        .from('creators') // Ensure the table name matches exactly
        .insert([
          {username,
          name,
          bio,
          socialLink,
          profilePicture: profilePictureUrl,
        }])
        .select()

      if (insertError) {
        throw insertError;
      }

      console.log('Insert Data:', data);

      toast.success('Profile updated successfully');
      router.push('/dashboard');
    } catch (error: any) {
      console.error('Error:', error.message);
      toast.error('Error updating profile');
    }
  };

  return (
    <>
      <h1 className="pt-8 block text-center text-2xl font-semibold">
        Complete Your Page
      </h1>
      <div className="mt-16 flex justify-center items-center">
        <div className="flex flex-col md:flex-row bg-white rounded-2xl shadow-lg z-20 border-gray-300 border gap-5 p-5 justify-center items-center">
          <div className="flex-1 h-64 container">
            <div className="flex flex-col items-center mt-10 justify-center">
              <div className="relative">
                <Image
                  src={selectedImage || avatar2}
                  alt="Avatar"
                  className="w-40 h-40 rounded-full object-cover mb-4"
                  width={160}
                  height={160}
                />
              </div>
              <div className="max-w-60 p-5 container">
                <div className="relative flex items-center border border-gray-700 rounded-full px-3 py-2 justify-center cursor-pointer">
                  <Image src={image} alt="Upload" className="w-6" />
                  <span className="text-[11px] py-2 px-4">
                    Upload Profile Picture
                  </span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="absolute inset-0 opacity-0 cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="contact-form flex-1">
            <div className="container flex justify-center items-center">
              <form className="py-12 sm:w-[400px]">
                <div className="space-y-4">
                  <p className="text-sm font-light text-gray-800">Full name</p>
                  <div className="flex items-center border border-gray-300 rounded px-3 py-1">
                    <input
                      type="text"
                      placeholder="Name"
                      value={name}
                      onChange={(e) => {
                        console.log('Name:', e.target.value);
                        setName(e.target.value);
                      }}
                      className="block text-sm py-3 px-4 rounded-lg w-full outline-[#9A7440]"
                    />
                  </div>
                  <p className="text-sm font-light text-gray-800">Bio</p>
                  <div className="flex items-center border border-gray-300 rounded px-3 py-1">
                    <input
                      type="text"
                      placeholder="Tell us about yourself"
                      value={bio}
                      onChange={(e) => {
                        console.log('Bio:', e.target.value);
                        setBio(e.target.value);
                      }}
                      className="block text-sm py-3 px-4 rounded-lg w-full outline-[#9A7440]"
                    />
                  </div>
                  <p className="text-sm font-light text-gray-800">Website or social link</p>
                  <div className="flex items-center border border-gray-300 rounded px-3 py-1">
                    <input
                      type="text"
                      placeholder="https://"
                      value={socialLink}
                      onChange={(e) => {
                        console.log('Social Link:', e.target.value);
                        setSocialLink(e.target.value);
                      }}
                      className="block text-sm py-3 px-4 rounded-lg w-full outline-[#9A7440]"
                    />
                  </div>
                </div>
                <div className="text-start mt-6">
                  <button
                    type="button"
                    onClick={handleSubmit}
                    className="p-3 text-[10px] sm:text-lg text-white bg-[#562B0C] rounded-full hover:bg-[#7c3d11] transition-all"
                  >
                    Continue
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default UploadForm;
