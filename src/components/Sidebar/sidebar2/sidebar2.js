import React from 'react';
import { Link } from 'react-router-dom';
import './sidebar2.scss';
import companies from '../../../images/companies.svg';
import investors from '../../../images/investors.svg';
import incubators from '../../../images/incubators.svg';
import accelerators from '../../../images/accelerators.svg';
import people from '../../../images/people.svg';
import funding from '../../../images/funding.svg';
import acquisitions from '../../../images/acquisitions.svg';
import mentors from '../../../images/mentors.svg';
import schools from '../../../images/schools.svg';
import ecell from '../../../images/ecell.svg';
import govt from '../../../images/govt.svg';
import submitEntry from '../../../images/submitEntry.svg';
import submitError from '../../../images/submitError.svg';
import left from '../../../images/chevron-left.svg';

export default function Sidebar2({ click }) {
  return (
    <div className="Sidebar2-container">
      <div className="Sidebar2">
        <img src={left} alt="toggle" className="sidebar2-left-2310" onClick={click} />
        <div className="sidebar2-search-text">Search For</div>
        <div className="sidebar2-images">
          <Link
            to="/search/companies"
            style={{ textDecoration: 'none', color: 'inherit', margin: '0' }}
            onClick={click}>
            <div className="sidebar2-images-container">
              {' '}
              <img src={companies} alt="companies" className='sidebar2-icon' />
              <p className="sidebar2-text">Companies</p>{' '}
            </div>
          </Link>
          <Link
            to="/search/investors"
            style={{ textDecoration: 'none', color: 'inherit', margin: '0' }}
            onClick={click}>
            <div className="sidebar2-images-container">
              {' '}
              <img src={investors} alt="investors" className='sidebar2-icon' />
              <p className="sidebar2-text">Investors</p>{' '}
            </div>
          </Link>
          <Link
            to="/search/incubators"
            style={{ textDecoration: 'none', color: 'inherit', margin: '0' }}
            onClick={click}>
            <div className="sidebar2-images-container">
              {' '}
              <img src={incubators} alt="incubators" className='sidebar2-icon' />
              <p className="sidebar2-text">Incubators</p>{' '}
            </div>
          </Link>
          <Link
            to="/search/accelerators"
            style={{ textDecoration: 'none', color: 'inherit', margin: '0' }}
            onClick={click}>
            <div className="sidebar2-images-container">
              {' '}
              <img src={accelerators} alt="accelerators" className='sidebar2-icon' />
              <p className="sidebar2-text">Accelerators</p>{' '}
            </div>
          </Link>
          <Link
            to="/search/people"
            style={{ textDecoration: 'none', color: 'inherit', margin: '0' }}
            onClick={click}>
            <div className="sidebar2-images-container" onClick={click}>
              {' '}
              <img src={people} alt="people" className='sidebar2-icon' />
              <p className="sidebar2-text">People</p>{' '}
            </div>
          </Link>
          <Link
            to="/search/funding"
            style={{ textDecoration: 'none', color: 'inherit', margin: '0' }}
            onClick={click}>
            <div className="sidebar2-images-container">
              {' '}
              <img src={funding} alt="funding" className='sidebar2-icon' />
              <p className="sidebar2-text">Funding</p>{' '}
            </div>
          </Link>
          <Link
            to="/search/acquisitions"
            style={{ textDecoration: 'none', color: 'inherit', margin: '0' }}
            onClick={click}>
            <div className="sidebar2-images-container" onClick={click}>
              {' '}
              <img src={acquisitions} alt="acquisitions" className='sidebar2-icon' />
              <p className="sidebar2-text">Acquisitions</p>{' '}
            </div>
          </Link>
          <Link
            to="/search/mentors"
            style={{ textDecoration: 'none', color: 'inherit', margin: '0' }}
            onClick={click}>
            <div className="sidebar2-images-container" onClick={click}>
              {' '}
              <img src={mentors} alt="mentors" className='sidebar2-icon' />
              <p className="sidebar2-text">Mentors</p>{' '}
            </div>
          </Link>
          <Link
            to="/search/schools"
            style={{ textDecoration: 'none', color: 'inherit', margin: '0' }}
            onClick={click}>
            <div className="sidebar2-images-container" onClick={click}>
              {' '}
              <img src={schools} alt="schools" className='sidebar2-icon' />
              <p className="sidebar2-text">Schools</p>{' '}
            </div>
          </Link>
          <Link
            to="/search/ecell"
            style={{ textDecoration: 'none', color: 'inherit', margin: '0' }}
            onClick={click}>
            <div className="sidebar2-images-container" onClick={click}>
              {' '}
              <img src={ecell} alt="ecell" className='sidebar2-icon' />
              <p className="sidebar2-text">E Cells</p>{' '}
            </div>
          </Link>
          <Link
            to="/search/government-organisations"
            style={{ textDecoration: 'none', color: 'inherit', margin: '0' }}
            onClick={click}>
            <div className="sidebar2-images-container" onClick={click}>
              <img src={govt} alt="govt" className='sidebar2-icon' />
              <p className="sidebar2-text">Government Organisations</p>{' '}
            </div>
          </Link>
        </div>
      </div>
      {/* Bottom content */}
      <div className="sidebar2-bottom">
        <div className="sidebar2-divider"></div>
        <Link
          to="/new-entry"
          style={{ textDecoration: 'none', color: 'inherit', margin: '0' }}
          onClick={click}>
          <div className="sidebar2-images-container">
            <img src={submitEntry} alt="Submit Entry" className='sidebar2-icon' />
            <p className="sidebar2-text">Submit Entry</p>{' '}
          </div>
        </Link>
        <div className="sidebar2-images-container" onClick={click}>
          <img src={submitError} alt="Report bug" className='sidebar2-icon' />
          <p className="sidebar2-text">Report Error</p>{' '}
        </div>
      </div>
    </div>
  );
}
