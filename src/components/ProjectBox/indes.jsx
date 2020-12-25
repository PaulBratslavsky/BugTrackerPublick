import React from 'react'
import styled from 'styled-components'
/*******************************************
  ProjectBox Components
*******************************************/
const ProjectBoxStyled = styled.div`
  a {
    text-decoration: none;
    color: #71b6f9;
  }
  .tag {
    font-size: 13px;
    color: ${({ highlight }) => (highlight ? highlight : '#ff8acc')};
    margin-bottom: 1rem;
  }

  .heading {
    color: #f7f7f7;
    margin-bottom: 0.8rem;
  }

  .text-muted {
    color: #adb5bd;
    font-size: 13px;
    margin-bottom: 1rem;
  }

  .quick-status {
    display: flex;
    justify-content: space-between;

    h4 {
      color: #f7f7f7;
    }

    div {
      flex: 1;
      display: flex;
      flex-direction: column;
    }
  }

  .avatar {
    height: 45px;
    width: 45px;
    border-radius: 50%;
    display: inline-block;
    overflow: hidden;

    img {
      height: 100%;
      width: 100%;
    }
  }

  .assigned {
    margin-bottom: 0.8rem;
  }

  .progress {
    background-color: rgba(255, 138, 204, 0.2);
    height: 0.475rem;
    border-radius: 3px;
    overflow: hidden;
    .progress-bar {
        background: ${({ highlight }) => (highlight ? highlight : '#ff8acc')};
      height: 0.475rem;
    }
  }
`

export default function ProjectBox({ highlight }) {
  return (
    <ProjectBoxStyled highlight={highlight}>
      <div>
        <p className="tag">Web Design</p>
        <p className="text-muted">
          If several languages coalesce the grammar is more simple and regular
          than that of the individual languages...<a href="#">View more</a>
        </p>
        <div class="quick-status">
          <div>
            <h4>16</h4>
            <p class="text-muted">Tasks</p>
          </div>

          <div>
            <h4>56</h4>
            <p class="text-muted">Notes</p>
          </div>
        </div>

        <div className="assigned">
          <h5 className="heading">Assigned to:</h5>
          <div>
            <a href="#" class="avatar" data-original-title="Paul Helme">
              <img
                src="https://source.unsplash.com/random"
                class="rounded-circle avatar-sm"
                alt="friend"
              />
            </a>
          </div>
        </div>

        <div>
          <h5 className="heading">
            Progress <span class="text-success float-right">80%</span>
          </h5>
          <div class="progress">
            <div class="progress-bar" style={{ width: '80%' }}></div>
          </div>
        </div>
      </div>
    </ProjectBoxStyled>
  )
}
