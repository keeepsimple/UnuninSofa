using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace UnuninSofa.Data.Migrations
{
    public partial class ModifyMaterial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "Description",
                table: "Materials",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)");

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "56016200-6e5a-41ae-83ba-a9759ac9e6b5",
                column: "ConcurrencyStamp",
                value: "fd006578-5d12-4569-8826-cfbfa9a76c47");

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "99e62bd0-505e-4c7c-9533-3d0177220cec",
                column: "ConcurrencyStamp",
                value: "79560bdb-3196-4396-bcd8-6651d64f55a0");

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "8967c0da-1606-447b-b91b-10c9f7e87418",
                columns: new[] { "ConcurrencyStamp", "PasswordHash", "SecurityStamp" },
                values: new object[] { "95e0f83f-64f3-4b11-8cee-4acb37a0c843", "AQAAAAEAACcQAAAAECCNFdwjxVW9Mf5wt327kzyl7sR1/GJoSIZDEARBuqerLy2BrHkjUE0ODJkaYO50Xg==", "dd8e40e2-0010-4edd-a553-6a270d773c3f" });

            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: 1,
                column: "CreatedAt",
                value: new DateTime(2022, 12, 15, 9, 36, 6, 280, DateTimeKind.Local).AddTicks(9786));

            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: 2,
                column: "CreatedAt",
                value: new DateTime(2022, 12, 15, 9, 36, 6, 280, DateTimeKind.Local).AddTicks(9800));

            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: 3,
                column: "CreatedAt",
                value: new DateTime(2022, 12, 15, 9, 36, 6, 280, DateTimeKind.Local).AddTicks(9802));

            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: 4,
                column: "CreatedAt",
                value: new DateTime(2022, 12, 15, 9, 36, 6, 280, DateTimeKind.Local).AddTicks(9803));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "Description",
                table: "Materials",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "56016200-6e5a-41ae-83ba-a9759ac9e6b5",
                column: "ConcurrencyStamp",
                value: "fd62863e-cba2-40f5-a774-9ac2f61ad361");

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "99e62bd0-505e-4c7c-9533-3d0177220cec",
                column: "ConcurrencyStamp",
                value: "44b15e87-6865-41a7-a563-bb59d54b585a");

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "8967c0da-1606-447b-b91b-10c9f7e87418",
                columns: new[] { "ConcurrencyStamp", "PasswordHash", "SecurityStamp" },
                values: new object[] { "c7d58050-4302-486e-966f-4b1010e36e21", "AQAAAAEAACcQAAAAECV5wydK7/9Q/b+xKwBiirsPb1fqA7sFIv7GbMz1T3gB4uBlg+wXwk70XIB2lpjcoQ==", "de82730c-0aa8-4c39-a4ca-d4798edf5985" });

            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: 1,
                column: "CreatedAt",
                value: new DateTime(2022, 12, 14, 17, 5, 48, 731, DateTimeKind.Local).AddTicks(3269));

            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: 2,
                column: "CreatedAt",
                value: new DateTime(2022, 12, 14, 17, 5, 48, 731, DateTimeKind.Local).AddTicks(3284));

            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: 3,
                column: "CreatedAt",
                value: new DateTime(2022, 12, 14, 17, 5, 48, 731, DateTimeKind.Local).AddTicks(3285));

            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: 4,
                column: "CreatedAt",
                value: new DateTime(2022, 12, 14, 17, 5, 48, 731, DateTimeKind.Local).AddTicks(3286));
        }
    }
}
