using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace UnuninSofa.Data.Migrations
{
    public partial class ModifyOrder : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "56016200-6e5a-41ae-83ba-a9759ac9e6b5",
                column: "ConcurrencyStamp",
                value: "577075c6-4045-43c3-83ce-ac0b88faa584");

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "99e62bd0-505e-4c7c-9533-3d0177220cec",
                column: "ConcurrencyStamp",
                value: "6f3b7693-ab75-4c79-a1ed-2aa6065e4504");

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "8967c0da-1606-447b-b91b-10c9f7e87418",
                columns: new[] { "ConcurrencyStamp", "PasswordHash", "SecurityStamp" },
                values: new object[] { "1431f84f-0bd8-4005-b89f-209aaffc4aba", "AQAAAAEAACcQAAAAEAZ4O+c4DhpVt6+kF4p2O3lVr/2JlulZE/3uM0eVxs3sMGBOFgf8o9OUDb/4DFAwBg==", "c548ee24-1b51-4c18-b01f-b81dd9e4096b" });

            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: 1,
                column: "CreatedAt",
                value: new DateTime(2022, 12, 22, 21, 36, 36, 538, DateTimeKind.Local).AddTicks(824));

            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: 2,
                column: "CreatedAt",
                value: new DateTime(2022, 12, 22, 21, 36, 36, 538, DateTimeKind.Local).AddTicks(836));

            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: 3,
                column: "CreatedAt",
                value: new DateTime(2022, 12, 22, 21, 36, 36, 538, DateTimeKind.Local).AddTicks(837));

            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: 4,
                column: "CreatedAt",
                value: new DateTime(2022, 12, 22, 21, 36, 36, 538, DateTimeKind.Local).AddTicks(838));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "56016200-6e5a-41ae-83ba-a9759ac9e6b5",
                column: "ConcurrencyStamp",
                value: "f9f7c022-4107-45c8-a988-5fe675ea4b7b");

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "99e62bd0-505e-4c7c-9533-3d0177220cec",
                column: "ConcurrencyStamp",
                value: "b127c0f6-2edd-4452-b057-0cbef533a836");

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "8967c0da-1606-447b-b91b-10c9f7e87418",
                columns: new[] { "ConcurrencyStamp", "PasswordHash", "SecurityStamp" },
                values: new object[] { "7e3594b9-3d9c-44fa-b3e8-6e7251cbf23a", "AQAAAAEAACcQAAAAECFaRvvUw7+JwPZcHALFqwGHq/ea2IElMDshEN7e/W2sQ0W/evG9raDgtzjeOrvsvA==", "3cc86408-6dd4-429b-854e-04f6d75ac99a" });

            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: 1,
                column: "CreatedAt",
                value: new DateTime(2022, 12, 22, 21, 33, 15, 915, DateTimeKind.Local).AddTicks(7370));

            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: 2,
                column: "CreatedAt",
                value: new DateTime(2022, 12, 22, 21, 33, 15, 915, DateTimeKind.Local).AddTicks(7382));

            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: 3,
                column: "CreatedAt",
                value: new DateTime(2022, 12, 22, 21, 33, 15, 915, DateTimeKind.Local).AddTicks(7383));

            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: 4,
                column: "CreatedAt",
                value: new DateTime(2022, 12, 22, 21, 33, 15, 915, DateTimeKind.Local).AddTicks(7384));
        }
    }
}
