import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import Sidebar from "../components/Sidebar";

const Home: NextPage = () => {
  return (
    <>
      <div className="screen-cover d-none d-xl-none" />
      <div className="row">
        <div className="col-lg-3 col-navbar d-none d-xl-block">
          <Sidebar activeMenu="dash"/>
        </div>
        <div className="col-lg-9">
          <div className="nav">
            <div className="d-flex justify-content-between align-items-center w-100 mb-3 mb-md-0">
              <div className="d-flex justify-content-start align-items-center">
                <button id="toggle-navbar" onClick={() => {}}>
                  <Image
                    src="/assets/img/global/burger.svg"
                    alt=""
                    height={24}
                    width={24}
                  />
                </button>
                <h2 className="nav-title">Overview</h2>
              </div>
              <button className="btn-notif d-block d-md-none">
                <Image src="/assets/img/global/bell.svg" alt="" height={24} width={24} />
              </button>
            </div>
            <div className="d-flex justify-content-between align-items-center nav-input-container">
              <div className="nav-input-group">
                <input
                  type="text"
                  className="nav-input"
                  placeholder="Search people, team, project"
                />
                <button className="btn-nav-input">
                  <img src="../assets/img/global/search.svg" alt="" />
                </button>
              </div>
              <button className="btn-notif d-none d-md-block">
                <img src="../assets/img/global/bell.svg" alt="" />
              </button>
            </div>
          </div>
          <div className="content">
            <div className="row">
              <div className="col-12">
                {/* <Link href="/import-data">
                  <div className="col-12 col-md-12 col-lg-12">
                    <div className="statistics-card import-link">
                      <div className="d-flex justify-content-center align-items-center">
                        <div className="d-flex flex-column justify-content-between align-items-center">
                          <h5 className="content-desc text-secondary">
                            Import data excel
                          </h5>
                          <h3 className="statistics-value text-white">
                            Start Import
                          </h3>
                        </div>
                        <button className="ms-3 btn-statistics">
                          <img src="../assets/img/global/times.svg" alt="" />
                        </button>
                      </div>
                      <div className="statistics-list">
                        <img
                          className="statistics-image"
                          src="../assets/img/home/history/photo-4.png"
                          alt=""
                        />
                        <img
                          className="statistics-image"
                          src="../assets/img/home/history/photo-3.png"
                          alt=""
                        />
                        <img
                          className="statistics-image"
                          src="../assets/img/home/history/photo.png"
                          alt=""
                        />
                        <img
                          className="statistics-image"
                          src="../assets/img/home/history/photo-1.png"
                          alt=""
                        />
                        <img
                          className="statistics-image"
                          src="../assets/img/home/history/photo-2.png"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </Link> */}
              </div>
                <h2 className="content-title">Statistics</h2>
                <h5 className="content-desc mb-4">Your business growth</h5>
              <div className="col-12 col-md-6 col-lg-4">
                <div className="statistics-card">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex flex-column justify-content-between align-items-start">
                      <h5 className="content-desc">Data Uploaded</h5>
                      <h3 className="statistics-value">18,500,000</h3>
                    </div>
                    <button className="btn-statistics">
                      <img src="../assets/img/global/times.svg" alt="" />
                    </button>
                  </div>
                  <div className="statistics-list">
                    <img
                      className="statistics-image"
                      src="../assets/img/home/history/photo-4.png"
                      alt=""
                    />
                    <img
                      className="statistics-image"
                      src="../assets/img/home/history/photo-3.png"
                      alt=""
                    />
                    <img
                      className="statistics-image"
                      src="../assets/img/home/history/photo.png"
                      alt=""
                    />
                    <img
                      className="statistics-image"
                      src="../assets/img/home/history/photo-1.png"
                      alt=""
                    />
                    <img
                      className="statistics-image"
                      src="../assets/img/home/history/photo-2.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                <div className="statistics-card">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex flex-column justify-content-between align-items-start">
                      <h5 className="content-desc">Report Reserved</h5>
                      <h3 className="statistics-value">122,000</h3>
                    </div>
                    <button className="btn-statistics">
                      <img src="../assets/img/global/times.svg" alt="" />
                    </button>
                  </div>
                  <div className="statistics-list">
                    <div className="statistics-icon award">
                      <img src="../assets/img/home/team/award.svg" alt="" />
                    </div>
                    <div className="statistics-icon globe">
                      <img src="../assets/img/home/team/globe.svg" alt="" />
                    </div>
                    <div className="statistics-icon target">
                      <img src="../assets/img/home/team/target.svg" alt="" />
                    </div>
                    <div className="statistics-icon box">
                      <img src="../assets/img/home/team/box.svg" alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                <div className="statistics-card">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex flex-column justify-content-between align-items-start">
                      <h5 className="content-desc">Projects</h5>
                      <h3 className="statistics-value">150,000,000</h3>
                    </div>
                    <button className="btn-statistics">
                      <img src="../assets/img/global/times.svg" alt="" />
                    </button>
                  </div>
                  <div className="statistics-list">
                    <div className="statistics-icon one">
                      <span>SK</span>
                    </div>
                    <div className="statistics-icon two">
                      <span>DW</span>
                    </div>
                    <div className="statistics-icon three">
                      <span>FJ</span>
                    </div>
                    <div className="statistics-icon four">
                      <span>AP</span>
                    </div>
                    <div className="statistics-icon five">
                      <span>ML</span>
                    </div>
                    {/* <img src="../assets/img/home/icon-1.png" alt=""><img src="../assets/img/home/icon-2.png" alt=""><img src="../assets/img/home/icon-3.png" alt=""><img src="../assets/img/home/icon-4.png" alt=""><img src="../assets/img/home/icon-5.png" alt=""> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-12 col-lg-6">
                <h2 className="content-title">Documents</h2>
                <h5 className="content-desc mb-4">Standard procedure</h5>
                <div className="document-card">
                  <div className="document-item">
                    <div className="d-flex justify-content-start align-items-center">
                      <div className="document-icon box">
                        <img
                          src="../assets/img/home/document/archive.svg"
                          alt=""
                        />
                      </div>
                      <div className="d-flex flex-column justify-content-between align-items-start">
                        <h2 className="document-title">Customer Guide</h2>
                        <span className="document-desc">180 MB • PDF</span>
                      </div>
                    </div>
                    <button className="btn-statistics">
                      <img src="../assets/img/global/download.svg" alt="" />
                    </button>
                  </div>
                  <div className="document-item">
                    <div className="d-flex justify-content-start align-items-center">
                      <div className="document-icon globe">
                        <img
                          src="../assets/img/home/document/twitch.svg"
                          alt=""
                        />
                      </div>
                      <div className="d-flex flex-column justify-content-between align-items-start">
                        <h2 className="document-title">Twitch Record</h2>
                        <span className="document-desc">700 GB • MP4</span>
                      </div>
                    </div>
                    <button className="btn-statistics">
                      <img src="../assets/img/global/download.svg" alt="" />
                    </button>
                  </div>
                  <div className="document-item">
                    <div className="d-flex justify-content-start align-items-center">
                      <div className="document-icon database">
                        <img
                          src="../assets/img/home/document/database.svg"
                          alt=""
                        />
                      </div>
                      <div className="d-flex flex-column justify-content-between align-items-start">
                        <h2 className="document-title">Personas Datasets</h2>
                        <span className="document-desc">11 MB • CSV</span>
                      </div>
                    </div>
                    <button className="btn-statistics">
                      <img src="../assets/img/global/download.svg" alt="" />
                    </button>
                  </div>
                  <div className="document-item">
                    <div className="d-flex justify-content-start align-items-center">
                      <div className="document-icon target">
                        <img
                          src="../assets/img/home/document/book-open.svg"
                          alt=""
                        />
                      </div>
                      <div className="d-flex flex-column justify-content-between align-items-start">
                        <h2 className="document-title">Marketing Book</h2>
                        <span className="document-desc">891 MB • PDF</span>
                      </div>
                    </div>
                    <button className="btn-statistics">
                      <img src="../assets/img/global/download.svg" alt="" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-6">
                <h2 className="content-title">History</h2>
                <h5 className="content-desc mb-4">Track the flow</h5>
                <div className="document-card">
                  <div className="document-item">
                    <div className="d-flex justify-content-start align-items-center">
                      <img
                        className="document-icon"
                        src="../assets/img/home/history/photo.png"
                        alt=""
                      />
                      <div className="d-flex flex-column justify-content-between align-items-start">
                        <h2 className="document-title">Amalia Syahrina</h2>
                        <span className="document-desc">
                          Promoted to Sr. Website Designer
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="document-item">
                    <div className="d-flex justify-content-start align-items-center">
                      <img
                        className="document-icon"
                        src="../assets/img/home/history/photo-1.png"
                        alt=""
                      />
                      <div className="d-flex flex-column justify-content-between align-items-start">
                        <h2 className="document-title">Ah Park Yo</h2>
                        <span className="document-desc">
                          Promoted to Front-End Developer
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="document-item">
                    <div className="d-flex justify-content-start align-items-center">
                      <img
                        className="document-icon"
                        src="../assets/img/home/history/photo-2.png"
                        alt=""
                      />
                      <div className="d-flex flex-column justify-content-between align-items-start">
                        <h2 className="document-title">Sintia Siny</h2>
                        <span className="document-desc">
                          Promoted to Accounting Executive
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="document-item">
                    <div className="d-flex justify-content-start align-items-center">
                      <img
                        className="document-icon"
                        src="../assets/img/home/history/photo-3.png"
                        alt=""
                      />
                      <div className="d-flex flex-column justify-content-between align-items-start">
                        <h2 className="document-title">Jerami Putu</h2>
                        <span className="document-desc">
                          Promoted to Quality Manager
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
