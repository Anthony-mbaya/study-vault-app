import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Document, Page, pdfjs } from "react-pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHomeUser,faArrowAltCircleRight, faArrowAltCircleLeft,faClose } from "@fortawesome/free-solid-svg-icons"; 
import pdf1 from "../Tabs/PDF-DOC/PDF1.pdf";
import pdf2 from "../Tabs/PDF-DOC/PDF2.pdf";
import pdf3 from "../Tabs/PDF-DOC/PDF3.pdf";

const pdf_files = [
  {
    Id: 1,
    title: "PDF1-WEB DESIGN",
    url: pdf1,
  },
  { Id: 2, title: "PDF2-PROGRAMMING", url: pdf2 },
  { Id: 3, title: "PDF3-NETWORKING", url: pdf3 },
  { Id: 4, title: "PDF4-CYBERSECURITY", url: pdf2 },
  { Id: 5, title: "PDF5-MACHINE LEARNING", url: pdf1 },
  { Id: 6, title: "PDF6-BLOCKCHAIN", url: pdf3 },
];

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export const PDFs = () => {
  const [cart, setCart] = useState([]);
  const [view, setView] = useState(true);
  const [currentPage,setCurrentPage] = useState(1);
  const [selected,setSelected] = useState(null);

  const addToCart = (file) => {
    setCart(prevCart => {
      if (!prevCart.some(item => item.Id === file.Id)) {
        return [...prevCart, file];
      }
      return prevCart;
    });
  };
  const removeFromCart = (file) => {
    setCart(prevCart => prevCart.filter(item => item.Id !== file.Id));
  };
  const viewFun = () => {
    setView(preView => !preView);
  };

  const openPDF =(pdf)=>{
    setSelected(pdf);
    setCurrentPage(1);
  }
  const closePDF =()=>{
    setSelected(null);
  }
  const goNext =()=>{
    //real scenarion need to know total pages
    if (currentPage < 100){
      setCurrentPage(prevPage => prevPage + 1);
    };
  };
  const goBack =()=>{
    if (currentPage > 1){
      setCurrentPage(prevPage => prevPage - 1);
    }
  }
  const pdfCost =()=>{
    let sum = cart.length * 10; 

    return sum;
  }

  return (
    <div className="pdf-cont">
      <div className={`pdf-items ${selected ? 'hidden' : ''}`}>
      
      <Link to="/" >
      <FontAwesomeIcon icon={faHomeUser} className="pdfHomeBtn" />
      </Link>

      <div>
      <button className="viewBtn" onClick={viewFun}>{view ? 'View Cart' : 'View PDF'}</button>
      </div>
      {view ? (
      <div className="pdf-disp"> 
        {pdf_files.map((pdf) => {
          return (
            <div key={pdf.Id} className="single-pdf">
              <h2>{pdf.title}</h2>
              <Document file={pdf.url} className='doc'>
                <Page
                  pageNumber={1}
                  width={250} 
                  renderTextLayer={false}
                  renderAnnotationLayer={false}
                  className='pag' 
                />
              </Document>
              <div className="pdf-btns">
              <button onClick={() => addToCart(pdf)}>Add To Cart</button>
              <button onClick={() => openPDF(pdf)}>Open PDF</button>
              </div>
            </div>
          );
        })}
      </div>
      
      ) : (
        <div className="cart-disp">
          <h1>Cart</h1>

          {cart.length === 0 ? (
            <h2>No items in the cart!</h2>
          ) : (
            <ul>
              {cart.map((item) => (
                <li key={item.Id} className="cart-item">
                  <h3>{item.title}</h3>
                  <button onClick={() => removeFromCart(item)}>Delete</button>
                </li>
              ))}
               
            </ul>
          )}
          <h2 className="cost">Cost: {pdfCost()} KES</h2>
          <div className="payment-ways"> 
            <div className="payment-list">
              <button className="mpesa">MPESA</button>
              <button className="kcb">KCB</button>
              <button className="paypal">PAYPAL</button>
              <button className="voucher">VOUCHER</button>
              </div> 
          </div>
        </div>
      )}
      </div>
      {selected && (
        <div className="pages-cont">
          <button onClick={closePDF} className="close"><FontAwesomeIcon icon={faClose} className="closep-icon" /></button>
          <button onClick={goBack} className="prev"><FontAwesomeIcon icon={faArrowAltCircleLeft} className="back-icon" /></button>
          <Document file={selected.url} className='pdf-doc'>
            <Page pageNumber={currentPage} width={600} renderTextLayer={false} renderAnnotationLayer={false} className='pdf-page' />
          </Document>
          
          <button onClick={goNext} className="next"><FontAwesomeIcon icon={faArrowAltCircleRight} className="next-icon" /> </button>
          
        </div>
      )}
    </div>
  );
};
