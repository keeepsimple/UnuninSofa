using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace UnuninSofa.Data.Migrations
{
    public partial class ModifySale2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "IsActive",
                table: "Sales",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "56016200-6e5a-41ae-83ba-a9759ac9e6b5",
                column: "ConcurrencyStamp",
                value: "a54c36d9-72ad-45b4-924d-ca7530e133ee");

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "99e62bd0-505e-4c7c-9533-3d0177220cec",
                column: "ConcurrencyStamp",
                value: "bebe6267-1a3c-4efc-8e6a-b56e11c48b4a");

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "8967c0da-1606-447b-b91b-10c9f7e87418",
                columns: new[] { "ConcurrencyStamp", "PasswordHash", "SecurityStamp" },
                values: new object[] { "524ed13a-e6f0-4325-9fe9-53f3e5f0c1a6", "AQAAAAEAACcQAAAAEJPE3VLDwi24pRwbL3N1JNz1VGcqE2earjvDrgtpgXuewRYGJVw8qjcliHc7rqQafw==", "6f7f8ae4-37dc-4ded-8769-2e1c1801c8ac" });

            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: 1,
                column: "CreatedAt",
                value: new DateTime(2022, 12, 22, 9, 49, 25, 48, DateTimeKind.Local).AddTicks(3117));

            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: 2,
                column: "CreatedAt",
                value: new DateTime(2022, 12, 22, 9, 49, 25, 48, DateTimeKind.Local).AddTicks(3130));

            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: 3,
                column: "CreatedAt",
                value: new DateTime(2022, 12, 22, 9, 49, 25, 48, DateTimeKind.Local).AddTicks(3131));

            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: 4,
                column: "CreatedAt",
                value: new DateTime(2022, 12, 22, 9, 49, 25, 48, DateTimeKind.Local).AddTicks(3132));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "IsActive",
                table: "Sales");

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "56016200-6e5a-41ae-83ba-a9759ac9e6b5",
                column: "ConcurrencyStamp",
                value: "d1741835-0e9b-45a6-831f-25b8b26588f2");

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "99e62bd0-505e-4c7c-9533-3d0177220cec",
                column: "ConcurrencyStamp",
                value: "430d2a47-43e9-4c71-a12a-9c9c2252be29");

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "8967c0da-1606-447b-b91b-10c9f7e87418",
                columns: new[] { "ConcurrencyStamp", "PasswordHash", "SecurityStamp" },
                values: new object[] { "12a0dc5a-f1b6-4c3e-a8b7-e075a9381e40", "AQAAAAEAACcQAAAAEL1IByvBhjM222zx7045fWDKyQyOEMXgfuoMkMnBWDuEaWKMSmiMeCGWSjVrynu50Q==", "caab5388-72c4-46e1-932a-1416c03b34fe" });

            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: 1,
                column: "CreatedAt",
                value: new DateTime(2022, 12, 22, 9, 12, 37, 521, DateTimeKind.Local).AddTicks(9483));

            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: 2,
                column: "CreatedAt",
                value: new DateTime(2022, 12, 22, 9, 12, 37, 521, DateTimeKind.Local).AddTicks(9498));

            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: 3,
                column: "CreatedAt",
                value: new DateTime(2022, 12, 22, 9, 12, 37, 521, DateTimeKind.Local).AddTicks(9499));

            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: 4,
                column: "CreatedAt",
                value: new DateTime(2022, 12, 22, 9, 12, 37, 521, DateTimeKind.Local).AddTicks(9500));
        }
    }
}
