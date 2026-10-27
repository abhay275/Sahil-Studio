import fs from 'fs';
import path from 'path';

function loadEnv() {
  const envPath = path.resolve(process.cwd(), '.env');
  if (!fs.existsSync(envPath)) return {};
  const content = fs.readFileSync(envPath, 'utf-8');
  const env = {};
  for (const line of content.split('\n')) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const eqIdx = trimmed.indexOf('=');
    if (eqIdx !== -1) {
      const key = trimmed.slice(0, eqIdx).trim();
      const val = trimmed.slice(eqIdx + 1).trim();
      env[key] = val;
    }
  }
  return env;
}

async function verifyCloudinary() {
  console.log('\n🔍 Checking Cloudinary Configuration...\n');
  const env = loadEnv();
  const cloudName = env.VITE_CLOUDINARY_CLOUD_NAME;
  const uploadPreset = env.VITE_CLOUDINARY_UPLOAD_PRESET;

  let hasError = false;

  if (!cloudName || cloudName === 'your_cloud_name_here') {
    console.log('❌ VITE_CLOUDINARY_CLOUD_NAME is still set to the placeholder or missing.');
    hasError = true;
  } else {
    console.log(`✅ Cloud Name found: "${cloudName}"`);
  }

  if (!uploadPreset || uploadPreset === 'your_upload_preset_here') {
    console.log('❌ VITE_CLOUDINARY_UPLOAD_PRESET is still set to the placeholder or missing.');
    hasError = true;
  } else {
    console.log(`✅ Upload Preset found: "${uploadPreset}"`);
  }

  if (hasError) {
    console.log('\n⚠️  Please replace the placeholders in .env and make sure to save the file (Cmd + S / Ctrl + S).\n');
    process.exit(1);
  }

  console.log('\n🌐 Testing connection with Cloudinary API...');
  try {
    const res = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ upload_preset: uploadPreset }),
    });

    const data = await res.json();

    if (data.error) {
      if (data.error.message.includes('Missing required parameter - file')) {
        console.log('\n🎉 SUCCESS! Cloudinary connection verified successfully!');
        console.log(`   - Cloud "${cloudName}" is reachable.`);
        console.log(`   - Upload Preset "${uploadPreset}" is active and unsigned.`);
        console.log('   - Direct uploads from your React app will work!\n');
        process.exit(0);
      } else {
        console.log(`\n❌ Cloudinary responded with an error:\n   "${data.error.message}"\n`);
        if (data.error.message.includes('Upload preset not found')) {
          console.log('💡 Tip: Make sure the upload preset name matches your Cloudinary dashboard and is set to "Unsigned".');
        } else if (res.status === 401 || res.status === 404) {
          console.log('💡 Tip: Verify that your Cloud Name is spelled correctly.');
        }
        process.exit(1);
      }
    } else {
      console.log('\n🎉 Connection verified!\n');
    }
  } catch (err) {
    console.error('\n❌ Network error while connecting to Cloudinary:', err.message);
    process.exit(1);
  }
}

verifyCloudinary();
