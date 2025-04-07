import { atom } from 'jotai';
import { types } from '../../client';

export const organizationInvitationsAtom = atom<types.InvitationDto[]>([]);
