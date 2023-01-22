import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Container } from '@mui/system';
import AboutItem from './aboutItem';
import { useTranslation } from 'react-i18next';



export default function AboutTable({blog}) {
  const { t } = useTranslation()

  return (
    <Container maxWidth='md'>

    <TableContainer  component={Paper}>
      <Table sx={{ Width: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
          <TableCell  align="center">{t("userImage")}</TableCell>
          <TableCell  align="center">{t("username")}</TableCell>
          <TableCell  align="center">{t("title")}</TableCell>
            <TableCell sx={{minWidth:"180px"}} align="center">{t("description")}</TableCell>
            <TableCell align="center">{t("actions")}</TableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
         
         {blog.map((e,i)=><AboutItem e={e} key={i}/>)}
           
        
        </TableBody>
      </Table>
    </TableContainer>    </Container>

  );
}