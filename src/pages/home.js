import '../css/home.css';
import Image from 'react-bootstrap/Image'
import Menu from './menu.js';

export default function Home() {
  return (
      <div className="center">
          <Menu/>
            <div>
                <Image className="image-details" src="https://objectstorage.sa-saopaulo-1.oraclecloud.com/p/ISmjijbXhPBNg4Ls_pgpUa9vyXbQUllRYPW93zJYKkvaJ_EQrj2hScrLJdMpWtoJ/n/grkw8ijigw7a/b/YouHungry/o/Images/Banner-youhungry.png" rounded />
             </div>
                </div>
  );
}
