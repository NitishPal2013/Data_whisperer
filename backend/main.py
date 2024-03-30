from fastapi import FastAPI, File, UploadFile, HTTPException
from pathlib import Path
import uuid
from fastapi.middleware.cors import CORSMiddleware

origin = [
   "http://localhost:5173"
]

app = FastAPI()

app.add_middleware(
   CORSMiddleware,
   allow_origins = origin,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
   )


upload_dir = Path('uploads')

@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.post('/upload-xlsx')
async def upload_xlsx(file: UploadFile):
  upload_dir.mkdir(parents=True, exist_ok=True)

  filename = f'{uuid.uuid4()}.xlsx'

  filepath = upload_dir / filename
  try:
    with open(filepath, 'w') as f:
        f.write(str(file.file))
        f.close()
    return {'message': 'File uploaded successfully!'}
  except Exception as e:
    print(f'Error uploading file: {e}')
    raise HTTPException(status_code=500, detail='Upload failed. Please try again.')