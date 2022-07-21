import type {
  ClientConfiguration,
  Folder,
} from '../types';
import { getArchiveRootFolderVo } from '../api';
import { folderVoToFolder } from '../utils';

export const getArchiveFolders = async (
  clientConfiguration: ClientConfiguration,
  archiveId: number,
): Promise<Folder[]> => {
  const rootFolderVo = await getArchiveRootFolderVo(
    clientConfiguration,
    archiveId,
  );
  const rootFolder = folderVoToFolder(rootFolderVo);
  return rootFolder.folders;
};
