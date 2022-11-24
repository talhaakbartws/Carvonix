import moment from 'moment';

const dateTimeUs = incomingDate => {
  return moment(incomingDate).format('MMM DD, YYYY hh:mm:ss A');
};

const dateSimplewithSlashes = incomingDate => {
  return moment(incomingDate).format(`YYYY/MM/DD`);
};

const dateSimplewithDashes = incomingDate => {
  return moment(incomingDate).format(`YYYY-MM-DD`);
};

const dateUSWithAlphaMonth = incomingDate => {
  return moment(incomingDate).format(`DD MMM YYYY`);
};

const dateTimeFromNow = incomingDate => {
  return moment(incomingDate).fromNow();
};

export {
  dateTimeUs,
  dateUSWithAlphaMonth,
  dateSimplewithSlashes,
  dateSimplewithDashes,
  dateTimeFromNow,
};
