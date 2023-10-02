import React from 'react';
import { pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import Header from '../components/Header';
import { Document, Page } from 'react-pdf';
import resume from './Resume.pdf'
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();

const Resume = () => {
  return (
    <div>      
      <Header />
      <div className="container mx-auto mb-10" style={{ display: 'flex', justifyContent: 'center' }}>
        <Document file={resume}>
          <Page pageNumber={1} scale={1.5} /> {/* Increase scale to make PDF larger */}
        </Document>
      </div>
    </div>
  );
}

export default Resume;
