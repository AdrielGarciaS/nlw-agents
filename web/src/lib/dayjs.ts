import lib from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/pt-BR';

lib.extend(relativeTime);
lib.locale('pt-BR');

export const dayjs = lib;
