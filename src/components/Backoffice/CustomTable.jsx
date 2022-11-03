import {
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";
import { Edit, Delete } from "@mui/icons-material";
import parse from "html-react-parser";

export default function CustomTable({ items, headers, actions }) {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          my: 2,
        }}
      >
        {actions.callbacks?.create && (
          <Button
            onClick={() => actions.callbacks.create()}
            variant="contained"
          >
            Create
          </Button>
        )}
      </Box>
      <TableContainer component={Paper} elevation={2}>
        <Table>
          <TableHead>
            <TableRow>
              {headers.map((header, index) => (
                <TableCell key={index}>
                  <Typography component="b" fontSize="1.2rem" color="secondary">
                    {header}
                  </Typography>
                </TableCell>
              ))}
              {actions && (
                <TableCell align="center">
                  <Typography component="b" fontSize="1.2rem" color="secondary">
                    Actions
                  </Typography>
                </TableCell>
              )}
            </TableRow>
          </TableHead>
          <TableBody>
            {items?.map((item, index) => (
              <TableRow key={index}>
                {item.rows?.map((cell, index) => (
                  <TableCell key={index}>
                    <Typography
                      component="span"
                      sx={{
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        display: "-webkit-box",
                        WebkitLineClamp: 1,
                        WebkitBoxOrient: "vertical",
                      }}
                    >
                      {parse(cell)}
                    </Typography>
                  </TableCell>
                ))}
                <TableCell sx={{ display: "flex", height: "100%" }}>
                  {actions?.edit && (
                    <Button onClick={() => actions.callbacks.edit(item.itemId)}>
                      <Edit />
                    </Button>
                  )}
                  {actions?.delete && (
                    <Button
                      onClick={() => actions.callbacks.delete(item.itemId)}
                    >
                      <Delete />
                    </Button>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
