import { Link } from "react-router-dom";

export default function Navigation() {
    return (
        <nav>
        <div className='Nav'>
        <ul>
            <li><Link to="/">Regular</Link></li>
            <li><Link to="/hot">Hot</Link></li>
          </ul>
        </div>
      </nav>
    );
  }