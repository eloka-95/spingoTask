// src/config/menuOptions.ts

const menuOptions = (setMenuVisible: (visible: boolean) => void) => [
  { label: 'Edit stock', icon: 'edit', onPress: () => { /* Edit action */ setMenuVisible(false); } },
  { label: 'Supplier', icon: 'person', onPress: () => { /* Supplier action */ setMenuVisible(false); } },
  { label: 'Export', icon: 'export', onPress: () => { /* Export action */ setMenuVisible(false); } },
  { label: 'Duplicate', icon: 'content-copy', onPress: () => { /* Duplicate action */ setMenuVisible(false); } },
  { label: 'Share', icon: 'share', onPress: () => { /* Share action */ setMenuVisible(false); } },
  { label: 'View history', icon: 'history', onPress: () => { /* View history action */ setMenuVisible(false); } },
  { label: 'Delete', icon: 'delete', onPress: () => { /* Delete action */ setMenuVisible(false); } },
];

export default menuOptions;
