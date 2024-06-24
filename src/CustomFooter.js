import {ReactComponent as LogoIcon} from './lib/icons/LogoIcon.svg';


function CustomFooter() {
    return (
      <footer className="footer p-10 bg-base-200 text-base-content">
        <aside>
          <LogoIcon className='w-12 h-12 fill-current'/>
          <p>Oy Shirts<br />High-quality, customizable t-shirts</p>
        </aside>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Custom Designs</a>
          <a className="link link-hover">Bulk Orders</a>
          <a className="link link-hover">Gift Cards</a>
          <a className="link link-hover">Customer Support</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About Us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press Kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of Use</a>
          <a className="link link-hover">Privacy Policy</a>
          <a className="link link-hover">Cookie Policy</a>
        </nav>
      </footer>
    );
  }
  
  export default CustomFooter;
  