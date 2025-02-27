export const MESSAGE_STATUS = {
  FAILED: 'failed',
  SENT: 'sent',
  DELIVERED: 'delivered',
  READ: 'read',
  PROGRESS: 'progress',
};

export const MESSAGE_TYPE = {
  INCOMING: 0,
  OUTGOING: 1,
  ACTIVITY: 2,
  TEMPLATE: 3,
};

export const CONVERSATION_STATUS = {
  OPEN: 'open',
  RESOLVED: 'resolved',
  PENDING: 'pending',
  SNOOZED: 'snoozed',
};

export const CONVERSATION_PRIORITY = {
  URGENT: 'urgent',
  HIGH: 'high',
  LOW: 'low',
  MEDIUM: 'medium',
};

// Size in mega bytes
export const MAXIMUM_FILE_UPLOAD_SIZE = 40;
export const MAXIMUM_FILE_UPLOAD_SIZE_TWILIO_SMS_CHANNEL = 5;

export const ALLOWED_FILE_TYPES =
  'image/*,' +
  'audio/*,' +
  'video/*,' +
  '.3gpp,' +
  'text/csv, text/plain, application/json, application/pdf, text/rtf,' +
  'application/zip, application/x-7z-compressed application/vnd.rar application/x-tar,' +
  'application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint, application/vnd.oasis.opendocument.text,' +
  'application/vnd.openxmlformats-officedocument.presentationml.presentation, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,' +
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document,';

export const ALLOWED_FILE_TYPES_FOR_TWILIO_WHATSAPP =
  'image/png, image/jpeg,' +
  'audio/mpeg, audio/opus, audio/ogg, audio/amr,' +
  'video/mp4,' +
  'application/pdf,';

export const CSAT_RATINGS = [
  {
    key: 'disappointed',
    emoji: '😞',
    value: 1,
    color: '#FDAD2A',
  },
  {
    key: 'expressionless',
    emoji: '😑',
    value: 2,
    color: '#FFC532',
  },
  {
    key: 'neutral',
    emoji: '😐',
    value: 3,
    color: '#FCEC56',
  },
  {
    key: 'grinning',
    emoji: '😀',
    value: 4,
    color: '#6FD86F',
  },
  {
    key: 'smiling',
    emoji: '😍',
    value: 5,
    color: '#44CE4B',
  },
];

export const AUDIO_FORMATS = {
  WEBM: 'audio/webm',
  OGG: 'audio/ogg',
  WAV: 'audio/wav',
};

export const MESSAGE_VARIABLES = [
  {
    label: 'Conversation Id',
    key: 'conversation.id',
  },
  {
    label: 'Contact Id',
    key: 'contact.id',
  },
  {
    label: 'Contact name',
    key: 'contact.name',
  },
  {
    label: 'Contact first name',
    key: 'contact.first_name',
  },
  {
    label: 'Contact last name',
    key: 'contact.last_name',
  },
  {
    label: 'Contact email',
    key: 'contact.email',
  },
  {
    label: 'Contact phone',
    key: 'contact.phone',
  },
  {
    label: 'Agent name',
    key: 'agent.name',
  },
  {
    label: 'Agent first name',
    key: 'agent.first_name',
  },
  {
    label: 'Agent last name',
    key: 'agent.last_name',
  },
  {
    label: 'Agent email',
    key: 'agent.email',
  },
];
