// src/config/menuOptions.ts

const menuOptions = (setMenuVisible: (visible: boolean) => void) => [
  { label: 'Edit stock', icon: require('../assets/images/icons/edit/edit-2.png'), onPress: () => { /* Edit action */ setMenuVisible(false); } },
  { label: 'Supplier', icon: require('../assets/images/icons/edit/frame.png'), onPress: () => { /* Supplier action */ setMenuVisible(false); } },
  { label: 'Export', icon: require('../assets/images/icons/edit/export.png'), onPress: () => { /* Export action */ setMenuVisible(false); } },
  { label: 'Duplicate', icon: require('../assets/images/icons/edit/content_copy_24dp_FILL0_wght300_GRAD0_opsz241.png'), onPress: () => { /* Duplicate action */ setMenuVisible(false); } },
  { label: 'Share', icon: require('../assets/images/icons/edit/share_24dp_FILL0_wght300_GRAD0_opsz24(1)1.png'), onPress: () => { /* Share action */ setMenuVisible(false); } },
  { label: 'View history', icon: require('../assets/images/icons/edit/history_24dp_FILL0_wght300_GRAD0_opsz241.png'), onPress: () => { /* View history action */ setMenuVisible(false); } },
  { label: 'Delete', icon: require('../assets/images/icons/edit/delete_24dp_FILL0_wght300_GRAD0_opsz241.png'), onPress: () => { /* Delete action */ setMenuVisible(false); } },
];

export default menuOptions;
