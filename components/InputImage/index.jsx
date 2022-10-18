import ImageUploading from 'react-images-uploading';
import classNames from 'classnames/bind';
import styles from './InputImage.module.scss';
import { useState } from 'react';
import Image from 'next/image';
const cx = classNames.bind(styles);

function InputImage() {
  const [images, setImages] = useState([]);
  const maxNumber = 69;
  const onChange = (imageList, addUpdateIndex) => {
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };
  return (
    <>
      <label htmlFor="">Ảnh bìa bài viết</label>
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
      >
        {({ imageList, onImageUpload, onImageUpdate, onImageRemove, isDragging, dragProps}) => (
          <div className={cx("upload__image-wrapper")}>
            {imageList.length == 0 &&<button
              className={cx("upload__image-btn", isDragging ? "is-dragging" : "")}
              onClick={onImageUpload}
              {...dragProps}
            >
              Bấm vào hoặc kéo thả ảnh vào đây
            </button>}
            {imageList.map((image, index) => (
              <div key={index} className={cx("image-item")}>
                <Image
                  src={image['data_url']}
                  alt="cover image"
                  width={200}
                  height={200} />
                <div className={cx("btns")}>
                  <button className={cx("update")} onClick={() => onImageUpdate(index)}>Đổi ảnh</button>
                  <button className={cx("remove")} onClick={() => onImageRemove(index)}>Xóa ảnh</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </ImageUploading>
    </>
  )
}


export default InputImage