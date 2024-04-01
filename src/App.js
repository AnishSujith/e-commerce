import React from 'react';
import './App.css';
import search from './search.png';
import denver from './denver-cfo.png';
import account from './account.png';
import shopping from './shopping.png';
import shop from './shop.png';
import model from './model.webp';
import graphic from './graphic.png';
import sa from './sa.png';
import golden from './golden-studio.png';
import furniture from './furniture.png';
import travel from './travel.png';
import model1 from './model1.jpg';
import model2 from './model2.webp';
import western from './western-dress.webp';
import formal from './formal.jpg';
import casual from './casual.jpg';
import filter from './filter.png';
import joggers from './joggers.avif';
import bag from './bag.jpg';
import scraf from './scarf.avif';
import hoodie from './hoodie.jpeg';
import green from './green-dress.jpeg';
import nike from './nike.jpg';
import jacket from './nike-jacket.jpg';
import glass from './glass.webp';
import party from './party.jpg';
import handbag from './handbags.webp';
import watch from './watch.webp';
import coat from './coat.jpg';
import handbag1 from './handbag-1.webp';
import wwatch from './womens-watch.jpg';
import facebook from './facebook.png';
import twitter from './twitter.png';
import linkedin from './linkedin.png';
import instagram from './instagram.png';
import master from './mastercard.png';
import visa from './visa.png';
import american from './american-express.png';
import paypal from './paypal.png';
import maestro from './maestro.png';
import klarna from './klarna.png';
import  scroll from './arrow.png';

class App extends React.Component {
  render() {
    return (
      <div id="component">
        <div id='content'>
          <div id='head'>
            <header>
              <nav id="nav">
                <input type="search" id="search" name="search" />
              </nav>
              <nav id="nav1">
                <img src={search} height={15} width={15} alt={search} id="search1" />
              </nav>
              <nav id="nav2"><img src={denver} height={10} width={20} alt={denver} /></nav>
              <h2 id="title">CORAL</h2>
              <nav id="nav3"><img src={denver} height={10} width={20} alt={denver} /></nav>
              <nav id="nav4"> <img src={account} height={15} width={15} alt={account} /></nav>
              <nav id="nav5">Account</nav>
              <nav id="nav6"> <img src={shopping} height={15} width={15} alt={shopping} /></nav>
              <nav id="nav7">Shopping</nav>
            </header>
            <hr />
            <nav id="nav-1">
              <nav id="nav-2">Jewelry & Accessories</nav>
              <nav id="nav-3">Clothing & Shoes</nav>
              <nav id="nav-4">Home & Living</nav>
              <nav id="nav-5">Wedding & Party</nav>
              <nav id="nav-6">Toys & Entertainment</nav>
              <nav id="nav-7">Arts & Collectibles</nav>
              <nav id="nav-8">Craft Supplies & Tools</nav>

            </nav>
            <section id='section'>
              <section id='section1'>
                <p id='collect'>Collections</p>
                <p>You can Expolre And Shop Many Differnt Collection <br />
                  From Various Brands Here.</p>
                <a href="" id='a'><img src={shop} height={10} width={10} alt={shop} />Shop Now</a>
              </section>
              <section id='section2'>
                <img src={model} height={270} width={300} alt={model} />
              </section>
            </section>
          </div>
        </div>
        <div id='content1'>
          <div id='head1'>
            <nav id='nav-10'><img src={graphic} height={30} width={50} alt={graphic} /></nav>
            <nav id='nav-11'><strong>GRAPHIC</strong><br />STUDIO</nav>
            <nav id='nav-12'>
              <img src={sa} height={40} width={50} alt={sa} />
            </nav>
            <nav id='nav-13'><strong>S.SALVA</strong> <br /> ART DIRECTOR</nav>
            <nav id='nav-14'><img src={golden} height={50} width={90} alt={golden} /></nav>
            <nav id='nav-15'> <img src={furniture} height={40} width={60} alt={furniture} /></nav>
            <nav id='nav-16'><strong>FURNITURE</strong><br />DESIGN</nav>
            <nav id='nav-17'><img src={travel} height={40} width={60} alt={travel} /></nav>
            <nav id='nav-18'><strong>TRAVEL</strong><br />LOOKBOOK</nav>
          </div>
          <section id='section-1'>
            <section id='section-2'>
              <img src={model1} height={300} width={350} alt={model1} id='image' />
            </section>
            <section id='section-3'>
              <section id='section-31'><img src={model2} height={150} width={170} alt={model2} /></section>
              <section id='section-32'><img src={western} height={150} width={170} alt={western} /></section>
              <section id='section-33'><img src={formal} height={150} width={170} alt={formal} /></section>
              <section id='section-34'><img src={casual} height={150} width={170} alt={casual} /></section>
            </section>
          </section>


        </div>
        <div id="content2">
          <h2 id="sub1">Or Subscribe To The Newsletter</h2>
          <div id='head2'>
            <nav id='nav-21'><strong>All Product</strong> </nav>
            <nav id='nav-22'>T-Shirt</nav>
            <nav id='nav-23'>Hoodies</nav>
            <nav id='nav-24'>Jacket</nav>
            <nav id='nav-25'>
              <a href='' id='a1'>
                <img src={filter} height={15} width={20} alt={filter} /> Filter</a> </nav>
          </div>
          <section id='section-4'>
            <section id='section-5'>
              <section id='section-51'>
                <figure>
                  <img src={joggers} height={150} width={180} alt={joggers} />
                  <figcaption>Adicolor Classic Joggers</figcaption>
                  <figcaption className='fig'>Dress</figcaption>
                  <figcaption className='fig1'>$63.85</figcaption>
                </figure>

              </section>
              <section id='section-52'>
                <figure>
                  <img src={bag} height={150} width={180} alt={bag} />
                  <figcaption>Nike Sportswear Futura Luxe</figcaption>
                  <figcaption className='fig'>bag</figcaption>
                  <figcaption className='fig1'>$130.00</figcaption>
                </figure>
              </section>
              <section id='section-53'>
                <figure>
                  <img src={green} height={150} width={180} alt={green} />
                  <figcaption>Basic Dress Green</figcaption>
                  <figcaption className='fig'>Dress</figcaption>
                  <figcaption className='fig1'>$236.00</figcaption>
                </figure>
              </section>
              <section id='section-54'>
                <figure>
                  <img src={nike} height={150} width={180} alt={nike} />
                  <figcaption>Nike Air Zoom Pegasus</figcaption>
                  <figcaption className='fig'>Shoe</figcaption>
                  <figcaption className='fig1'><strike>$220.00</strike><span style={{ color: "red" }}>$198.00</span> </figcaption>
                </figure>
              </section>
            </section>
            <section id='section-6'>
              <section id='section-61'>
                <figure>
                  <img src={scraf} height={150} width={160} alt={scraf} />
                  <figcaption>Geometric Print Scraf</figcaption>
                  <figcaption className='fig-1'>Scraf</figcaption>
                  <figcaption className='fig-2'>$53.00 </figcaption>
                </figure>
              </section>
              <section id='section-62'>
                <figure>
                  <img src={hoodie} height={150} width={180} alt={hoodie} />
                  <figcaption>Yellow Reserved Hoodies</figcaption>
                  <figcaption className='fig-1'>Dress</figcaption>
                  <figcaption className='fig-2'><strike>$324.00</strike><span style={{ color: "red" }}>$155.00</span> </figcaption>
                </figure>
              </section>
              <section id='section-63'>
                <figure>
                  <img src={jacket} height={150} width={160} alt={jacket} />
                  <figcaption>Nike Repel Miller</figcaption>
                  <figcaption className='fig-1'>Dress</figcaption>
                  <figcaption className='fig-2'>$120.00 </figcaption>
                </figure>
              </section>
              <section id='section-64'>
                <figure>
                  <img src={glass} height={150} width={160} alt={glass} />
                  <figcaption>Nike Sportswear Futura Luxe</figcaption>
                  <figcaption className='fig-1'>Glasses</figcaption>
                  <figcaption className='fig-2'>$160.00 </figcaption>
                </figure>
              </section>
            </section>
          </section>
        </div>
        <div id='content3'>
          <section id='section-7'>
            <h2 id='heading-2'>ZARA</h2>
            <p>Lustrous Yet Understated. The New Evening <br />
              Wear Collection Exclusively Offered At The <br />
              Reopened Giorgio Armani Boutique In Los <br />
              Angeles.
            </p>
            <br />
            <a href='' id='a-3'>See Collection</a>
          </section>
        </div>
        <div id='content4'>
          <h2 id='header-3'>Best Sellers</h2>
          <div id='head3'>
            <nav id='nav-41'><strong>All Product</strong> </nav>
            <nav id='nav-42'>T-Shirt</nav>
            <nav id='nav-43'>Hoodies</nav>
            <nav id='nav-44'>Jacket</nav>
            <nav id='nav-45'><a href='' id='a-2'>Show  All</a>
            </nav>
          </div>
          <section id='section-8'>
            <section id='section-81'>
              <figure>
                <img src={green} height={150} width={180} alt={green} />
                <figcaption>Basic Dress Green</figcaption>
                <figcaption className='fig'>Dress</figcaption>
                <figcaption className='fig1'>$236.00</figcaption>
              </figure>
            </section>
            <section id='section-82'>
              <figure>
                <img src={bag} height={150} width={180} alt={bag} />
                <figcaption>Nike Sportswear Futura Luxe</figcaption>
                <figcaption className='fig'>bag</figcaption>
                <figcaption className='fig1'>$130.00</figcaption>
              </figure>
            </section>
            <section id='section-83'><figure>
              <img src={hoodie} height={150} width={180} alt={hoodie} />
              <figcaption>Yellow Reserved Hoodies</figcaption>
              <figcaption className='fig-1'>Dress</figcaption>
              <figcaption className='fig-2'><strike>$324.00</strike><span style={{ color: "red" }}>$155.00</span> </figcaption>
            </figure></section>
            <section id='section-84'>
              <figure>
                <img src={nike} height={150} width={180} alt={nike} />
                <figcaption>Nike Air Zoom Pegasus</figcaption>
                <figcaption className='fig'>Shoe</figcaption>
                <figcaption className='fig1'><strike>$220.00</strike><span style={{ color: "red" }}>$198.00</span> </figcaption>
              </figure>
            </section>
          </section>
        </div>
        <div id='content5'>
          <div id='container'>
            <h2 id='heading-5'>Follow Products And Discounts On Instagram</h2>

            <section id='section-9'>
              <section id='section-91'>
                <img src={party} height={110} width={120} alt={party} />
              </section>
              <section id='section-92'>
                <img src={handbag} height={110} width={120} alt={handbag} />
              </section>
              <section id='section-93'>
                <img src={watch} height={110} width={120} alt={watch} />
              </section>
              <section id='section-94'>
                <img src={coat} height={110} width={120} alt={coat} />
              </section>
              <section id='section-95'>
                <img src={handbag1} height={110} width={120} alt={handbag1} />
              </section>
              <section id='section-96'>
                <img src={wwatch} height={110} width={120} alt={wwatch} />
              </section>
            </section>
            <h2 id='heading-6'>Or Subscribe To The Newsletter</h2>
            <form>
              <input type='email' id='mail' name='mail' placeholder='Email Address...' />
              <button type='submit'>SUBMIT</button>
            </form>
          </div>
        </div>
        <div id='footer'>
          <section id='footer1'>
            <span id='span-1'><img src={denver} height={10} width={20} alt={denver} /></span>
            <h2 id="title1">CORAL</h2>
            <span id='span-2'><img src={denver} height={10} width={20} alt={denver} /></span>
            <p id='para'>Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit, Sed Do Elusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua</p>
            <nav id='nav-51'>
              <nav id='nav-52'>
                <img src={facebook} height={10} width={20} alt={facebook} />
              </nav>
              <nav id='nav-53'>                <img src={twitter} height={10} width={20} alt={twitter} />
              </nav>
              <nav id='nav-54'>                <img src={linkedin} height={10} width={20}
                alt={linkedin} />
              </nav>
              <nav id='nav-55'>                <img src={instagram} height={10} width={20}
                alt={instagram} />
              </nav>
            </nav>
          </section>
          <section id='footer2'>
            <h5 id='heading-7'>CATALOG</h5>
            <a href='' className='a-3'>Necklaces</a><br />
            <a href='' className='a-3'> Hoodies</a><br />
            <a href='' className='a-3'>Jewelry Box</a><br />
            <a href='' className='a-3'> T-shirt</a><br />
            <a href='' className='a-3'> Jacket</a>
          </section>
          <section id='footer3'>
            <h5 id='heading-8'>ABOUT US</h5>

            <a href='' className='a-4'>Our Producers</a><br />

            <a href='' className='a-4'>Sitemap</a><br/>

            <a href='' className='a-4'>FAQ</a><br />

            <a href='' className='a-4'>About Us</a>
            <br />
            <a href='' className='a-4'>Terms & Conditions</a>

          </section>
          <section id='footer4'>
            <h5 id='heading-9'>CUSTOMER SERVICES</h5>
            <a href='' className='a-6'>Contact Us</a><br />

            <a href='' className='a-6'>Track Your Order</a><br/>

            <a href='' className='a-6'>Product Care & Repair</a><br />

            <a href='' className='a-6'>Book An Appointment</a>
            <br />
            <a href='' className='a-6'>Shipping & Returns</a>
          </section>
        </div>
        <div id='footer-1'>
            <div id='footer-2'>
              <nav id='nav-61'>&copy; 2022 Coral,Inc.</nav>
              <nav id='nav-62'><img src={master} height={35} width={40} alt={master}/></nav>
              <nav id='nav-63'><img src={visa} height={35} width={40} alt={visa}/></nav>
              <nav id='nav-64'><img src={american} height={35} width={40} alt={american}/></nav>
              <nav id='nav-65'><img src={paypal} height={35} width={40} alt={paypal}/></nav>
              <nav id='nav-66'><img src={maestro} height={35} width={40} alt={maestro}/></nav>
              <nav id='nav-67'><img src={klarna} height={35} width={40} alt={klarna}/></nav>
              <nav id='nav-68'>
                <a href='#' id='a-9'>Scroll To Top <img src={scroll} height={20} width={30} alt={scroll} /></a>

              </nav>
            </div>
        </div>
      </div>
    )
  }
}

export default App;
