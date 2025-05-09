import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  projectId: "YOUR_PROJECT_ID"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

document.getElementById('productForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  
  await addDoc(collection(db, 'products'), {
    name: productName.value,
    price: Number(productPrice.value),
    category: productCategory.value,
    imageUrl: 'путь_к_изображению' // После загрузки в Storage
  });
});