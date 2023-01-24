import { ArrowBackOutlined } from "@mui/icons-material";
import "./watch.scss";

export default function Watch() {
  return (
    <div className="watch">
      <div className="back">
        <ArrowBackOutlined />
        Home
      </div>
      <video
        className="video"
        autoPlay
        controls
        src="https://video.ridus.ru/video/12022/video.mp4"
      />
    </div>
  );
}
