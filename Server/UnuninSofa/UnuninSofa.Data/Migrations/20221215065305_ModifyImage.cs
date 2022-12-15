using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace UnuninSofa.Data.Migrations
{
    public partial class ModifyImage : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Images_ProductDetails_ProductDetailId",
                table: "Images");

            migrationBuilder.AlterColumn<int>(
                name: "ProductDetailId",
                table: "Images",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "56016200-6e5a-41ae-83ba-a9759ac9e6b5",
                column: "ConcurrencyStamp",
                value: "c8131a71-909b-42d0-be38-58613f1b3358");

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "99e62bd0-505e-4c7c-9533-3d0177220cec",
                column: "ConcurrencyStamp",
                value: "a78c43d2-0a1a-4609-8e3d-5bea04715511");

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "8967c0da-1606-447b-b91b-10c9f7e87418",
                columns: new[] { "ConcurrencyStamp", "PasswordHash", "SecurityStamp" },
                values: new object[] { "1b3d7a31-795b-4599-ac2e-79eb640311d5", "AQAAAAEAACcQAAAAEJ6kanP4Jyo7ZOgo8f6oIIJ6kXjRizNQpQNgeKGNtFQ8RXcbYQH17YdQstUgSUaVWA==", "f6516c4b-e9f2-4148-9d15-1e040a298521" });

            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: 1,
                column: "CreatedAt",
                value: new DateTime(2022, 12, 15, 13, 53, 4, 820, DateTimeKind.Local).AddTicks(7940));

            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: 2,
                column: "CreatedAt",
                value: new DateTime(2022, 12, 15, 13, 53, 4, 820, DateTimeKind.Local).AddTicks(7955));

            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: 3,
                column: "CreatedAt",
                value: new DateTime(2022, 12, 15, 13, 53, 4, 820, DateTimeKind.Local).AddTicks(7956));

            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: 4,
                column: "CreatedAt",
                value: new DateTime(2022, 12, 15, 13, 53, 4, 820, DateTimeKind.Local).AddTicks(7957));

            migrationBuilder.AddForeignKey(
                name: "FK_Images_ProductDetails_ProductDetailId",
                table: "Images",
                column: "ProductDetailId",
                principalTable: "ProductDetails",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Images_ProductDetails_ProductDetailId",
                table: "Images");

            migrationBuilder.AlterColumn<int>(
                name: "ProductDetailId",
                table: "Images",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

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

            migrationBuilder.AddForeignKey(
                name: "FK_Images_ProductDetails_ProductDetailId",
                table: "Images",
                column: "ProductDetailId",
                principalTable: "ProductDetails",
                principalColumn: "Id");
        }
    }
}
