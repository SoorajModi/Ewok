import React from "react";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell/TableCell";
import TableBody from "@material-ui/core/TableBody";
import TablePagination from "@material-ui/core/TablePagination";
import Paper from "@material-ui/core/Paper/Paper";
import {makeStyles} from "@material-ui/core";

const uniqid = require('uniqid');

const columns = [
    {id: 'name', label: 'Name', minWidth: 170},
    {id: 'year', label: 'Birth Year', minWidth: 170, align: 'center'},
    {id: 'height', label: 'Height', minWidth: 170, align: 'center'},
    {id: 'mass', label: 'Mass', minWidth: 170, align: 'center'},
];

function createData(name, year, height, mass, num) {
    return {name, year, height, mass, num};
}

const useStyles = makeStyles({
    root: {
        width: '100%',
    },
    container: {
        maxHeight: 600,
    },
});

function mapItems(items) {
    let num = 1;
    return items.data.map(item => {
        return createData(item.name, item.birth_year, item.height, item.mass, num++)
    });
}

function HomeTable(data) {
    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(event.target.value);
        setPage(0);
    };

    const rows = mapItems(data);

    return (
        <Paper className={classes.root}>
            <TableContainer className={classes.container}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={uniqid()}
                                    align={column.align}
                                    style={{minWidth: column.minWidth}}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                            return (
                                <TableRow hover role="checkbox" tabIndex={-1} key={uniqid()}>
                                    {columns.map((column) => {
                                        const value = row[column.id];
                                        return (
                                            <TableCell key={uniqid()} align={column.align}>
                                                <a href={'/character/' + row.num}>
                                                {column.format && typeof value === 'number' ? column.format(value) : value}
                                                </a>
                                            </TableCell>
                                        );
                                    })}
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            />
        </Paper>
    );
}

export default HomeTable;
