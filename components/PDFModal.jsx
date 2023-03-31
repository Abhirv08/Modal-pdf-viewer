import React, { useState } from 'react'
import { Modal } from 'react-bootstrap';
import { Document, Page } from 'react-pdf'

export default function PDFModal(props) {
    const [numPages, setNumPages] = useState(null);

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    };

    return (
        <Modal show={props.show} onHide={props.handleClose} size="lg">
          <Modal.Header closeButton>
            <Modal.Title>{props.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Document file="./example.pdf" onLoadSuccess={onDocumentLoadSuccess}>
              {[...Array(numPages)].map((_, index) => (
                <Page key={`page_${index + 1}`} pageNumber={index + 1} />
              ))}
            </Document>
          </Modal.Body>
        </Modal>
      );
}
