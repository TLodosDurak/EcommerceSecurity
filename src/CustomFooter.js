import {ReactComponent as LogoIcon} from './lib/icons/LogoIcon.svg';

function CustomFooter() {
  return (
    <footer className="footer p-10 bg-base-200 text-base-content">
      <aside>
        <LogoIcon className='w-12 h-12 fill-current'/>
        <p>blendjet<br />The Original Portable Blender</p>
      </aside>
      <nav>
        <h6 className="footer-title">Shop</h6>
        <a className="link link-hover">BlendJet 2</a>
        <a className="link link-hover">Accessories</a>
        <a className="link link-hover">Instant Beverages</a>
        <a className="link link-hover">Shop Ingredients</a>
      </nav>
      <nav>
        <h6 className="footer-title">Company</h6>
        <a className="link link-hover">About Us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Careers</a>
        <a className="link link-hover">Press</a>
      </nav>
      <nav>
        <h6 className="footer-title">Support</h6>
        <a className="link link-hover">User Guide</a>
        <a className="link link-hover">Help Center</a>
        <a className="link link-hover">Warranty</a>
        <a className="link link-hover">Returns</a>
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
