import React from 'react';
import TimePrint from '../Time/time.js'
import PropTypes from 'prop-types';
import './gitfile.css'





function FileIcon({ file }) {
    let icon = 'fa-file-text-o';
    if (file.type === 'folder') {
        icon = 'fa-folder';
    }
    return (
        <td className="file-icon">
            <i className={`fa ${icon}`} />
        </td>
    );
}
FileIcon.propTypes = {
    file: PropTypes.object.isRequired
};

function getFileName(file) {
    return [
        <FileIcon file={file} key={0} />,
        <td className="file-name" key={1}>{file.name}</td>
    ];
}

const FileListItem = ({ file }) => (
    <tr className="file-list-item">
        {getFileName(file)}
        <CommitMessage
            commit={file.latestCommit} />
        <td className="age">
            <TimePrint time={file.updated_at} />
        </td>
    </tr>
);
FileListItem.propTypes = {
    file: PropTypes.object.isRequired
};
const CommitMessage = ({ commit }) => (
    <td className="commit-message">
        {commit.message}
    </td>
);
CommitMessage.propTypes = {
    commit: PropTypes.object.isRequired
};



const FileList = ({ files }) => (
    <div>
    <table className="file-list">
        <tbody>
            {files.map(file =>
                /* now we use FileListItem here */
                <FileListItem key={file.id} file={file} />
            )}
        </tbody>
    </table>
   
    </div>
);
FileList.propTypes = {
    files: PropTypes.array
};


export default FileList;
