using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace UnuninSofa.Data.Migrations
{
    public partial class AddDescriptionToMaterial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Description",
                table: "Materials",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "56016200-6e5a-41ae-83ba-a9759ac9e6b5",
                column: "ConcurrencyStamp",
                value: "63df499e-ad17-4faa-a9ba-49b3c23e2865");

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "99e62bd0-505e-4c7c-9533-3d0177220cec",
                column: "ConcurrencyStamp",
                value: "57a873cb-76cf-46f4-b6a6-7864928af4a0");

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "8967c0da-1606-447b-b91b-10c9f7e87418",
                columns: new[] { "ConcurrencyStamp", "PasswordHash", "SecurityStamp" },
                values: new object[] { "a5fb7577-3e6d-45d7-a77a-ca3584988650", "AQAAAAEAACcQAAAAEGAbyMb+VoldDAmmC2OKzMnlxA0wwriOKGM+y3MGvCLtug6pbxmxPzpkNz0hFSK9/w==", "8d9bdc82-5e7e-4ce1-b5ff-b0f4129ee02d" });

            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: 1,
                column: "CreatedAt",
                value: new DateTime(2022, 12, 8, 10, 40, 46, 281, DateTimeKind.Local).AddTicks(4340));

            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: 2,
                column: "CreatedAt",
                value: new DateTime(2022, 12, 8, 10, 40, 46, 281, DateTimeKind.Local).AddTicks(4360));

            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: 3,
                column: "CreatedAt",
                value: new DateTime(2022, 12, 8, 10, 40, 46, 281, DateTimeKind.Local).AddTicks(4363));

            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: 4,
                column: "CreatedAt",
                value: new DateTime(2022, 12, 8, 10, 40, 46, 281, DateTimeKind.Local).AddTicks(4365));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Description",
                table: "Materials");

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "56016200-6e5a-41ae-83ba-a9759ac9e6b5",
                column: "ConcurrencyStamp",
                value: "d7986128-25aa-4ef8-9d56-e5899e50b2c5");

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "99e62bd0-505e-4c7c-9533-3d0177220cec",
                column: "ConcurrencyStamp",
                value: "2ad45293-31eb-405f-a0a5-9511f9550558");

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "8967c0da-1606-447b-b91b-10c9f7e87418",
                columns: new[] { "ConcurrencyStamp", "PasswordHash", "SecurityStamp" },
                values: new object[] { "76c589b5-cb7a-4aba-9edd-40fac9745176", "AQAAAAEAACcQAAAAED0xmtZ3JyHNod+5EjUhacY0zmea5to+s43NoDCk1Vr8Oq0XUdjXStbJWHuVvPOWpQ==", "7f30333c-4024-409b-a64c-64eb04e7a57b" });

            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: 1,
                column: "CreatedAt",
                value: new DateTime(2022, 12, 7, 17, 25, 48, 819, DateTimeKind.Local).AddTicks(7284));

            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: 2,
                column: "CreatedAt",
                value: new DateTime(2022, 12, 7, 17, 25, 48, 819, DateTimeKind.Local).AddTicks(7294));

            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: 3,
                column: "CreatedAt",
                value: new DateTime(2022, 12, 7, 17, 25, 48, 819, DateTimeKind.Local).AddTicks(7295));

            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: 4,
                column: "CreatedAt",
                value: new DateTime(2022, 12, 7, 17, 25, 48, 819, DateTimeKind.Local).AddTicks(7296));
        }
    }
}
