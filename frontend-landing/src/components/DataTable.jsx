import { Table, TableHead, TableRow, TableCell, TableBody, Paper, useTheme } from "@mui/material";

export default function DataTable({ headers, rows }) {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return (
    <Paper
      sx={{
        mt: 3,
        overflowX: "auto",
        p: 3,
        borderRadius: 3,
        boxShadow: 4,
        bgcolor: isDark ? "#1e1e1e" : "#fafafa",
      }}
    >
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            {headers.map((h, idx) => (
              <TableCell
                key={idx}
                sx={{
                  fontWeight: "bold",
                  bgcolor: isDark ? "#2c2c2c" : "#f0f0f0",
                  color: isDark ? "#f5f5f5" : "inherit",
                  py: 2,
                  fontSize: "0.95rem",
                }}
              >
                {h}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, i) => (
            <TableRow
              key={i}
              sx={{
                "&:hover": { bgcolor: isDark ? "#2a2a2a" : "#f9f9f9" },
                transition: "0.2s ease-in-out",
              }}
            >
              {row.map((cell, j) => (
                <TableCell
                  key={j}
                  sx={{
                    py: 2.5,
                    fontSize: "0.9rem",
                    lineHeight: 1.6,
                    color: isDark ? "#ddd" : "inherit",
                  }}
                >
                  <span dangerouslySetInnerHTML={{ __html: cell }} />
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}
