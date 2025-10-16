import {useState} from 'react'
export default function UploadForm(){
  const [file,setFile] = useState(null)
  const [email,setEmail] = useState('')
  const [status,setStatus] = useState('')
  const handleSubmit = async (e)=>{
    e.preventDefault();
    if(!file) return alert('Pick a file');
    const fd = new FormData(); fd.append('file',file); fd.append('email', email);
    setStatus('Uploading...');
    try{
      const res = await fetch((process.env.NEXT_PUBLIC_API_URL||'') + '/upload', {method:'POST', body:fd});
      const data = await res.json();
      if(res.ok) setStatus('Uploaded. Job ID: ' + data.job_id);
      else setStatus('Error: ' + (data.detail||res.statusText));
    }catch(err){
      setStatus('Upload failed: '+ err.message);
    }
  }
  return (
    <section id="try" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <h3 className="text-2xl font-bold mb-4">Try the AI Cleaner — Free POC</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="email" placeholder="Your work email" value={email} onChange={(e)=>setEmail(e.target.value)} className="p-3 border rounded w-full" required />
          <input type="file" accept=".csv,.xlsx" onChange={(e)=>setFile(e.target.files[0])} className="p-3 w-full" />
          <button className="inline-block bg-blue-600 text-white py-2 px-4 rounded">Upload & Clean</button>
          <div className="text-sm text-gray-600">{status}</div>
        </form>
      </div>
    </section>
  )
}
