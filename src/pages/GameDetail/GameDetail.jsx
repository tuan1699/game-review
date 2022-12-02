import React from "react";
import { detailSelector } from "../../redux/selector";
import { loadingDetailSelector } from "../../redux/selector";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import { useEffect } from "react";
import { fetchDetail } from "../../components/GameList/GameList.slice";
import "./GameDetail.css";

const GameDetail = () => {
  const loading = useSelector(loadingDetailSelector);

  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDetail(id));
  }, []);

  const game = useSelector(detailSelector);

  console.log(loading);

  return (
    <div className="container page-detail">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="row">
          <div className="col-4">
            <img src={game.thumbnail} alt="" />
            <div className="row my-3">
              <div className="col-3">
                <div className="free-btn">FREE</div>
              </div>
              <div className="col-9">
                <div className="play-btn">PLAY NOW</div>
              </div>
            </div>
          </div>
          <div className="col-8">
            <div className="game-title">{game.title}</div>
            <div className="game-infomation">
              <div className="info-title">About {game.title}</div>
              <div className="info-decr">{game.description}</div>
            </div>
            <div className="game-infomation">
              <div className="info-title">Addition Information</div>
              <div className="row">
                <div className="col-4">
                  <div className="more-info">
                    <div className="more-info-title">Title</div>
                    <div className="more-info-game">{game.title}</div>
                  </div>
                </div>
                <div className="col-4">
                  <div className="more-info">
                    <div className="more-info-title">Developer</div>
                    <div className="more-info-game">{game.developer}</div>
                  </div>
                </div>
                <div className="col-4">
                  <div className="more-info">
                    <div className="more-info-title">Publisher</div>
                    <div className="more-info-game">{game.publisher}</div>
                  </div>
                </div>
                <div className="col-4">
                  <div className="more-info">
                    <div className="more-info-title">Release Date</div>
                    <div className="more-info-game">{game.release_date}</div>
                  </div>
                </div>
                <div className="col-4">
                  <div className="more-info">
                    <div className="more-info-title">Genre</div>
                    <div className="more-info-game">{game.genre}</div>
                  </div>
                </div>
                <div className="col-4">
                  <div className="more-info">
                    <div className="more-info-title">Platform</div>
                    <div className="more-info-game">{game.platform}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="game-infomation">
              <div className="info-title">{game.title} Screenshots</div>
              <div className="row">
                <div className="col-4">
                  <img src={game.screenshots[0].image} alt="" />
                </div>
                <div className="col-4">
                  <img src={game.screenshots[1].image} alt="" />
                </div>
                <div className="col-4">
                  <img src={game.screenshots[2].image} alt="" />
                </div>
              </div>
            </div>

            <div className="game-infomation">
              <div className="info-title">Minimum System Requirements</div>
              <div className="info-decr-browser">
                {game.title} is a browser based game and should run smoothly on
                practically any PC with a updated web-browser. <br /> <br />
                If you have old hardware or software, you may still be able to
                play Game Of Thrones Winter Is Coming, but your game experience
                may suffer. For the best gameplay experience, we recommend the
                latest versions of Firefox, Chrome, or Internet Explorer.
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GameDetail;
