import { Document, Page, Text, View } from '@react-pdf/renderer'
import React from 'react'
import PropTypes from 'prop-types'
import PDFMemeSVGViewer from '../PDFMemeSVGViewer/PDFMemeSVGViewer'

function PDFMemeDocument(props) {
    return (
        <Document>
            <Page size="A4" orientation="landscape">
                <View><Text style={{textAlign:'center'}}>{props.meme.titre}</Text></View>
                <View><PDFMemeSVGViewer meme={props.meme} image={props.image} /></View>
            </Page>
        </Document>
    )
}

PDFMemeDocument.propTypes = {
    meme: PropTypes.object.isRequired,
    image: PropTypes.object,
}

export default PDFMemeDocument;