import { createClient } from '@supabase/supabase-js';
import { nanoid } from 'nanoid';
import { decode } from 'base64-arraybuffer';

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '10mb',
    },
  },
};


export default async function handler(req, res) {
  // Upload image to Supabase
  if (req.method === 'POST') {
    let { image } = req.body;

    if (!image) {
      return res.status(500).json({
        message: 'No image provided'
      })
    }

    try {
      const contentType = image.match(/data:(.*);base64/)?.[1];
      const base64FileData = image.split('base64,')?.[1];

      if (!contentType || !base64FileData) {
        return res.status(500).json({ message: 'Image data not valid' });
      }

      const fileName = nanoid();
      const ext = contentType.split('/')[1];
      const path = `${fileName}.${ext}`;

      const { data, error: uploadError } = await supabase.storage
        .from(process.env.SUPABASE_BUCKET)
        .upload(path, decode(base64FileData), {
          contentType,
          upsert: true,
        });

      if (uploadError) {
        throw new Error('Unable to upload image to storage');
      }

      // Construct public URL
      const url = `${process.env.SUPABASE_URL.replace('.co', '.in')}/storage/v1/object/public/${data.Key}`;

      return res.status(200).json({ url });
    } catch (e) {
      res.status(500).json({ message: 'Something went wrong' });
    }
  }
  // HTTP method not supported!
  else {
    res.setHeader('Allow', ['POST']);
    res
      .status(405)
      .json({ message: `HTTP method ${req.method} is not supported.` });
  }
}

// How to upload a image using this api:

// import axios from 'axios';

// const ListingForm = () => {
//   //...
  
//   const upload = async image => {
//     if (!image) return;

//     let toastId;
//     try {
//       setDisabled(true);
//       toastId = toast.loading('Uploading...');
//       const { data } = await axios.post('/api/image-upload', { image });
//       setImageUrl(data?.url);
//       toast.success('Successfully uploaded', { id: toastId });
//     } catch (e) {
//       toast.error('Unable to upload', { id: toastId });
//       setImageUrl('');
//     } finally {
//       setDisabled(false);
//     }
//   };
  
//   //...
// };