import React from "react";
import PropTypes from "prop-types";
import style from "./PDFThumbnail.module.css";
import { IImage, IMeme } from "orsys-tjs-meme/dist/interfaces/common";
import { connect } from "react-redux";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import PDFMemeDocument from "../PDFMemeDocument/PDFMemeDocument";

const PDFMemeThumbnail: React.FC<{
  images: Array<IImage>;
  memes: Array<IMeme>;
}> = (props) => {
  return (
    <div className={style.PDFMemeThumbnail} data-testid="MemeThumbnail">
      {props.memes.map((e: IMeme, i: number) => {
        const doc = (
          <PDFMemeDocument
            meme={e}
            image={props.images.find((img) => img.id === e.imageId)}
          />
        );
        return (
          <div key={`pdf-${i}`}>
            <PDFViewer
              showToolbar={true}
              style={{ height: "500px", width: "500px" }}
              children={doc}
            />
            <br />
            <div style={{ textAlign: "center" }}>
              <PDFDownloadLink
                fileName={`memeGen-${e.titre}-id${e.id}.pdf`}
                document={doc}
              >
                Liens de DL
              </PDFDownloadLink>
            </div>
          </div>
        );
      })}
    </div>
  );
};

PDFMemeThumbnail.propTypes = {
  memes: PropTypes.array.isRequired,
  images: PropTypes.array.isRequired,
};

function mapStateToProps(state: any, ownprops: any) {
  return {
    ...ownprops,
    memes: state.ressources.memes,
    images: state.ressources.images,
  };
}
function mapDispatchToProps(dispatch) {
  return {};
}
export const PDFConnectedMemeThumbnail = connect(
  mapStateToProps,
  mapDispatchToProps
)(PDFMemeThumbnail);
export default PDFMemeThumbnail;