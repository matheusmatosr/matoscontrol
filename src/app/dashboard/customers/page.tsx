import * as React from 'react';
import type { Metadata } from 'next';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Download as DownloadIcon } from '@phosphor-icons/react/dist/ssr/Download';
import { Plus as PlusIcon } from '@phosphor-icons/react/dist/ssr/Plus';
import { Upload as UploadIcon } from '@phosphor-icons/react/dist/ssr/Upload';
import dayjs from 'dayjs';

import { config } from '@/config';
import { CustomersFilters } from '@/components/dashboard/customer/customers-filters';
import { CustomersTable } from '@/components/dashboard/customer/customers-table';
import type { Customer } from '@/components/dashboard/customer/customers-table';

export const metadata = { title: `Clientes | Dashboard | ${config.site.name}` } satisfies Metadata;

const customers = [
  {
    id: 'USR-010',
    name: 'João Silva',
    avatar: '/assets/avatar-10.png',
    email: 'joao.silva@empresa.com.br',
    phone: '(11) 91234-5678',
    address: { city: 'São Paulo', country: 'Brasil', state: 'SP', street: 'Rua das Flores, 123' },
    createdAt: dayjs().subtract(2, 'hours').toDate(),
  },
  {
    id: 'USR-009',
    name: 'Maria Oliveira',
    avatar: '/assets/avatar-9.png',
    email: 'maria.oliveira@empresa.com.br',
    phone: '(21) 99876-5432',
    address: { city: 'Rio de Janeiro', country: 'Brasil', state: 'RJ', street: 'Av. Atlântica, 456' },
    createdAt: dayjs().subtract(3, 'hours').toDate(),
  },
  {
    id: 'USR-008',
    name: 'Carol Mendes',
    avatar: '/assets/avatar-8.png',
    email: 'carol.mendes@empresa.com.br',
    phone: '(31) 91234-9876',
    address: { city: 'Belo Horizonte', country: 'Brasil', state: 'MG', street: 'Rua dos Andradas, 789' },
    createdAt: dayjs().subtract(1, 'days').toDate(),
  },
  {
    id: 'USR-007',
    name: 'Ana Souza',
    avatar: '/assets/avatar-7.png',
    email: 'ana.souza@empresa.com.br',
    phone: '(41) 99876-1234',
    address: { city: 'Curitiba', country: 'Brasil', state: 'PR', street: 'Rua XV de Novembro, 1011' },
    createdAt: dayjs().subtract(5, 'days').toDate(),
  },
  {
    id: 'USR-006',
    name: 'Fernanda Lima',
    avatar: '/assets/avatar-6.png',
    email: 'fernanda.lima@empresa.com.br',
    phone: '(71) 98765-4321',
    address: { city: 'Salvador', country: 'Brasil', state: 'BA', street: 'Av. Sete de Setembro, 1213' },
    createdAt: dayjs().subtract(2, 'weeks').toDate(),
  },
] satisfies Customer[];

export default function Page(): React.JSX.Element {
  const page = 0;
  const rowsPerPage = 5;

  const paginatedCustomers = applyPagination(customers, page, rowsPerPage);

  return (
    <Stack spacing={3}>
      <Stack direction="row" spacing={3}>
        <Stack spacing={1} sx={{ flex: '1 1 auto' }}>
          <Typography variant="h4">Clientes</Typography>
          <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
            <Button color="inherit" startIcon={<UploadIcon fontSize="var(--icon-fontSize-md)" />}>
              Importar
            </Button>
            <Button color="inherit" startIcon={<DownloadIcon fontSize="var(--icon-fontSize-md)" />}>
              Exportar
            </Button>
          </Stack>
        </Stack>
        <div>
          <Button startIcon={<PlusIcon fontSize="var(--icon-fontSize-md)" />} variant="contained">
            Adicionar
          </Button>
        </div>
      </Stack>
      <CustomersFilters />
      <CustomersTable
        count={paginatedCustomers.length}
        page={page}
        rows={paginatedCustomers}
        rowsPerPage={rowsPerPage}
      />
    </Stack>
  );
}

function applyPagination(rows: Customer[], page: number, rowsPerPage: number): Customer[] {
  return rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
}
